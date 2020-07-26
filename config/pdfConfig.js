module.exports = {
    stylesheet: [
      "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
    ],
    body_class: "markdown-body",
    css: " .page-break { page-break-after: always; } .markdown-body { font-size: 11px; } section { margin: 0 auto;font-family: system-ui;font-size: 6px;}",
    pdf_options: {
      format: "A4",
      margin: "20mm 10mm",
      displayHeaderFooter: true,
      headerTemplate : `
        <section>
          <span>犀言語</span>
          <span>高谷 誉</span>
        </section>
      `,
      footerTemplate : `
        <section>
          <div>
            <span class="pageNumber"></span>
            / <span class="totalPages"></span>
          </div>
        </section>
      `
    },
    stylesheet_encoding: "utf-8"
  }