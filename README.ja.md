# Marp CLI Action

Translations: [English](./README.md) [日本語](./README.ja.md)

[@marp-team/marp-cli](https://github.com/marp-team/marp-cli) を用いて Markdown ファイルを静的な HTML / CSS、PDF、PowerPoint ドキュメント、画像などに変換する [GitHub Action](https://docs.github.com/actions) です。
このアクションは Marp CLI を実行し、HTML、PDF、PowerPoint、画像をレポジトリ内の Markdown ファイルから生成することができます。

この例は HTML スライドと PDF ファイルを [GitHub Pages](https://docs.github.com/pages) に公開します。

```yaml
- uses: actions/checkout@v3

- name: Convert Markdown into HTML and PDF
  uses: KoharaKazuya/marp-cli-action@v2

- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./
```

このアクションによって生成された [スライドの例](https://koharakazuya.github.io/marp-cli-action/ja/about-marp-cli-action.html) を参照してください。
