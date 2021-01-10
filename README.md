# rhinoceros_language/犀言語
## 上演のためのテキストです
### [詩](./edit/poem.md)
### [インストラクション](./edit/instruction.md)
## pdf作成
github actionsでpdfに出力しています。npmのmd-to-pdfを使用。
出力したpdfはartifactに保存されます。
### コマンド
#### 詩
`npx md-to-pdf ./edit/poem.md --config-file ./config/pdfConfig.js`
#### 概要
`npx md-to-pdf ./application/202008_AAF/summary.md --config-file ./config/pdfConfig.js`
#### 表紙
`npx md-to-pdf ./application/202008_AAF/cover.md --config-file ./config/coverPdfConfig.js`
### 参考
- 「MarkdownをPDFに変換する「md-to-pdf」は痒いところに手が届く素敵ツール」
  - https://dev.classmethod.jp/articles/md-to-pdf/
- https://docs.github.com/ja/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts
- https://github.com/actions/upload-artifact
- https://github.com/fomachanyade/tobimap2/blob/develop/.github/workflows/node.js.yml
