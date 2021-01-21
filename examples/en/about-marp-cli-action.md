---
marp: true
paginate: true
---

<!-- _paginate: false -->

# About [Marp CLI Action](https://github.com/KoharaKazuya/marp-cli-action) <!-- fit -->

---

## [Marp CLI Action](https://github.com/KoharaKazuya/marp-cli-action) is...

a [GitHub Action](https://docs.github.com/actions) to convert markdown files into static HTML / CSS, PDF, PowerPoint document, and image(s) by [Marp CLI](https://github.com/marp-team/marp-cli).

This action can invoke Marp cli and generate HTML, PDF, PowerPoint and images from Markdown files in the repository.

---

![bg contain left](https://marp.app/assets/marp.svg)

## What is "Marp"?

[Marp](https://marp.app/) is a tool to create slide deck with Markdown.

This slide deck is written in Markdown and converted by Marp CLI.

---

## Markdown example

```markdown
---
marp: true
paginate: true
---

<!-- _paginate: false -->

# About [Marp CLI Action](https://github.com/KoharaKazuya/marp-cli-action) <!-- fit -->

---

## [Marp CLI Action](https://github.com/KoharaKazuya/marp-cli-action) is...
```

See [the source of this slide](https://github.com/KoharaKazuya/marp-cli-action/blob/main/examples/en/about-marp-cli-action.md).

---

## What does "Marp CLI Action" provide?

To run [Marp CLI](https://github.com/marp-team/marp-cli) as a GitHub Action.

You can quickly and easily setup automation to generate HTML, PDF, PowerPoint and images from Markdown files in the repository.

---

## How to use

1. Add this to your workflow

```yaml
- uses: KoharaKazuya/marp-cli-action@v1
```

or

1. Use [this template](https://github.com/KoharaKazuya/marp-cli-action-gh-pages-template) and create your repository
2. Write Marp markdown
3. Commit and push

_Marp CLI Action does only generation files from Markdown. If you want to upload, release or publish, you can use any other actions._

---

## Options

See the `inputs` section in [`action.yml`](https://github.com/KoharaKazuya/marp-cli-action/blob/main/action.yml).

To customize Marp CLI, use [the Marp CLI configuration file such as `marp.config.json`, `marp.config.cjs` and `.marprc`](https://github.com/marp-team/marp-cli/blob/master/README.md#configuration-file).

The configuration file may be in repository root directory or specified by `config-file` input.

_For Japanese users; Specify `lang: ja-JP` as Marp CLI option. If you do so, Marp CLI Action will fix CJK font problem._

---

# Enjoy writing slides! :v: <!--fit-->
