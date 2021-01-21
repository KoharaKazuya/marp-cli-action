---
marp: true
paginate: true
---

<!-- _paginate: false -->

# [Marp CLI Action](https://github.com/KoharaKazuya/marp-cli-action) について <!-- fit -->

---

## [Marp CLI Action](https://github.com/KoharaKazuya/marp-cli-action) とは...

[@marp-team/marp-cli](https://github.com/marp-team/marp-cli) を用いて Markdown ファイルを静的な HTML / CSS、PDF、PowerPoint ドキュメント、画像などに変換する [GitHub Action](https://docs.github.com/actions) です。

このアクションは Marp CLI を実行し、HTML、PDF、PowerPoint、画像をレポジトリ内の Markdown ファイルから生成することができます。

---

![bg contain left](https://marp.app/assets/marp.svg)

## "Marp" って？

[Marp](https://marp.app/) は Markdown でスライドを作るためのツールです。

このスライドは Markdown で書かれ、Marp CLI で変換されています。

---

## Markdown 例

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

[このスライドのソース](https://github.com/KoharaKazuya/marp-cli-action/blob/main/examples/ja/about-marp-cli-action.md) を参照してください。

---

## "Marp CLI Action" は何を提供するの？

GitHub Action として [Marp CLI](https://github.com/marp-team/marp-cli) を実行します。

リポジトリ内の Markdown ファイルから HTML、PDF、PowerPoint、画像を生成の自動化を素早く簡単にセットアップできます。

---

## 使い方

1. ワークフローに以下を追加します

```yaml
- uses: KoharaKazuya/marp-cli-action@v1
```

または

1. [このテンプレート](https://github.com/KoharaKazuya/marp-cli-action-gh-pages-template) を使用し、リポジトリを作成します
2. Marp の Markdown を書きます
3. コミットし、プッシュします

_Marp CLI Action は Markdown からファイルを生成するのみです。アップロード、リリース、公開などをしたい場合は他のアクションを使いましょう。_

---

## オプション

[`action.yml`](https://github.com/KoharaKazuya/marp-cli-action/blob/main/action.yml) の `inputs` セクションを参照してください。

Marp CLI をカスタマイズするには [`marp.config.json`、`marp.config.cjs`、`.marprc` といった Marp CLI の設定ファイル](https://github.com/marp-team/marp-cli/blob/master/README.md#configuration-file) を使用してください。

設定ファイルはリポジトリルートに置くか、`config-file` input を指定します。

_日本語ユーザーへ; Marp CLI オプションとして `lang: ja-JP` を指定してください。そうした場合、Marp CLI Action は CJK フォント問題を修正します。_

---

# 楽しくスライドを書こう！ :v: <!--fit-->
