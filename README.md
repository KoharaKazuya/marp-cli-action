# Marp CLI Action

Translations: [English](./README.md) [日本語](./README.ja.md)

A [GitHub Action](https://docs.github.com/actions) to convert markdown files into static HTML / CSS, PDF, PowerPoint document, and image(s) by [@marp-team/marp-cli](https://github.com/marp-team/marp-cli).
This action can invoke Marp CLI and generate HTML, PDF, PowerPoint and images from Markdown files in the repository.

This example will publish a HTML slide deck and a PDF file on [GitHub Pages](https://docs.github.com/pages).

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

See [example slide deck](https://koharakazuya.github.io/marp-cli-action/en/about-marp-cli-action.html) genereted by this action.
