# Marp CLI Action

Translations: [English](./README.md) [日本語](./README.ja.md)

[@marp-team/marp-cli](https://github.com/marp-team/marp-cli) を用いて Markdown ファイルを静的な HTML / CSS、PDF、PowerPoint ドキュメント、画像などに変換する [GitHub Action](https://docs.github.com/actions) です。
このアクションは Marp CLI を実行し、HTML、PDF、PowerPoint、画像をレポジトリ内の Markdown ファイルから生成することができます。

この例は HTML スライドと PDF ファイルを [GitHub Pages](https://docs.github.com/pages) に公開します。

```yaml
jobs:
  publish:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Convert Markdown into HTML and PDF
        uses: KoharaKazuya/marp-cli-action@v4

      - name: Uploade artifact
        uses: actions/upload-pages-artifact@v3

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

このアクションによって生成された [スライドの例](https://koharakazuya.github.io/marp-cli-action/ja/about-marp-cli-action.html) を参照してください。
