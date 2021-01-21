#!/usr/bin/env node

const path = require("path");
const fs = require("fs").promises;
const core = require("@actions/core");
const { getInput } = core;
const { exec } = require("@actions/exec");
const { cosmiconfig } = require("cosmiconfig");

async function main() {
  const inputs = parseInputs();
  core.debug(`parsed inputs: ${JSON.stringify(inputs)}`);

  const { config, filepath } = await loadConf(inputs.configFile);
  const safeConfig = sanitizeConfig(config);
  core.debug(`loaded config: ${JSON.stringify(safeConfig)}`);

  if (
    String(safeConfig.lang || "en-US")
      .split("-")[0]
      .toLocaleLowerCase() === "ja"
  )
    japaneseFontFix();

  if (inputs.generateHtml) await marpCli(filepath, safeConfig);
  if (inputs.generatePdf) await marpCli(filepath, { ...safeConfig, pdf: true });
  if (inputs.generatePptx)
    await marpCli(filepath, { ...safeConfig, pptx: true });
  if (inputs.generateImage)
    await marpCli(filepath, { ...safeConfig, image: inputs.generateImage });
  if (inputs.generateImages)
    await marpCli(filepath, { ...safeConfig, images: inputs.generateImages });
}
main();

function parseInputs() {
  const toBool = (x) => x.toUpperCase() === "TRUE";
  return {
    configFile: getInput("config-file") || undefined,
    generateHtml: toBool(getInput("generate-html") || "true"),
    generatePdf: toBool(getInput("generate-pdf") || "true"),
    generatePptx: toBool(getInput("generate-pptx") || "false"),
    generateImage: getInput("generate-image") || undefined,
    generateImages: getInput("generate-images") || undefined,
  };
}

/**
 * @param {string|undefined} confPath
 * @returns {Promise<{ config: unknown, filepath: string } | undefined>}
 */
async function loadConf(confPath) {
  const explorer = cosmiconfig("marp");

  try {
    const ret = await (confPath === undefined
      ? explorer.search()
      : explorer.load(confPath));

    if (ret) return ret;
  } catch (e) {
    console.error(
      [
        "Could not find or parse configuration file.",
        e.name !== "Error" && `(${e.name})`,
        confPath !== undefined && `[${confPath}]`,
      ]
        .filter((m) => m)
        .join(" ")
    );
  }

  return { config: {}, filepath: "marp.config.json" };
}

function sanitizeConfig(config) {
  const hasInputDir = Boolean(config.inputDir);
  const hasOutput = Boolean(config.output);

  const picked = pick(config, [
    "allowLocalFiles",
    "bespoke",
    "description",
    "engine",
    "html",
    "jpegQuality",
    "lang",
    "ogImage",
    "options",
    "template",
    "theme",
    "themeSet",
    "title",
    "url",
  ]);

  return {
    ...picked,
    inputDir: hasInputDir ? config.inputDir : ".",
    output: hasInputDir || hasOutput ? config.output : ".",
  };
}

function pick(object, keys) {
  return keys.reduce((obj, key) => {
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
}

async function japaneseFontFix() {
  await fs.copyFile(
    "/home/marp/.cli-action/fontconfig.xml",
    "/etc/fonts/local.conf"
  );
  core.debug("For Japanese user, font priority has been changed");
}

async function marpCli(userConfigFilePath, config) {
  core.startGroup("Marp CLI execution");
  core.debug(`config: ${JSON.stringify(config)}`);

  const configPath = path.join(
    path.dirname(userConfigFilePath),
    `temp-config-${Math.random().toString(36).slice(-8)}.json`
  );
  await fs.writeFile(configPath, JSON.stringify(config));

  await exec("node", [
    "/home/marp/.cli/marp-cli.js",
    "--config-file",
    configPath,
    "-I",
    path.join(path.dirname(userConfigFilePath), config.inputDir),
  ]);

  await fs.unlink(configPath);

  core.endGroup();
}
