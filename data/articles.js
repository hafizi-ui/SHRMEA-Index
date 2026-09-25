/*
  SHRMEA — list of articles & publications
  ----------------------------------------
  To add an article (easiest way): open findings.html on the website, scroll to
  "Add a new article", fill in the form and press "Generate". Copy the result and paste it
  on the empty line right after  window.SHRMEA_ARTICLES = [  below. Newest first.
  Every block ends with  },  (a comma after the closing brace).

  Fields (only "title" is required; delete any line you don't need):
    id        short unique name with no spaces, used in the link (e.g. "shrmea-2027-journal")
    title     article title
    authors   author names
    year      year published
    type      "Journal article" | "Conference paper" | "Book chapter" | "Thesis" | "Article" | "News"
    venue     journal / conference / publisher
    status    "Published" | "In press" | "Under review" | "Accepted"
    abstract  short summary shown on the card
    link      web page of the article (https://...)
    doi       e.g. "10.1234/abcd.2027.001"
    pdf       link to a PDF (you can upload the PDF into the "papers" folder and write "papers/file.pdf")
    tags      ["tag one", "tag two"]
    body      optional full text to read on this website. Separate paragraphs with a blank line.
              Start a line with "## " for a sub-heading.
*/
window.SHRMEA_ARTICLES = [

  {
    id: "phd-thesis-2026",
    title: "The Development of a Sustainable Human Resource Management Employer–Employee Alignment Framework",
    authors: "Ahmad Hafizi Ahmad Giran; supervised by Puteri Fadzline Muhamad Tamyez and Muhammad Ashraf Fauri @ Fauzi",
    year: 2026,
    type: "Thesis",
    venue: "Doctor of Philosophy, Faculty of Industrial Management, Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)",
    status: "Submitted",
    abstract: "A qualitative multiple-case study of three multinational manufacturing firms in Malaysia (24 informants) examining how employers align HR operations with the SDGs and how employees experience sustainable HRM. The study develops the SHRMEA framework, a diagnostic tool that compares employer and employee perspectives on 16 indicators.",
    tags: ["Sustainable HRM", "SHRMEA", "Signalling Theory", "AMO", "Manufacturing", "Malaysia"],
    body: "## Summary\n\nDespite extensive scholarly attention to sustainable human resource management (SHRM), significant gaps remain in multilevel practices. This study examines how employers align human resource operations with the Sustainable Development Goals (SDGs), investigates employees’ experiences of SHRM practices, identifies differences in SHRM practices across firm types, and develops a measurement tool, the SHRM Employer–Employee Alignment (SHRMEA) framework.\n\n## Key result\n\nSHRM implementation was well institutionalised at the strategic and reporting levels, but internal culture at the operational level remained fragmented. Employer commitment to sustainability reporting and KPIs was undermined by inconsistent training, unequal rewards and weak employee buy-in across all three firms.\n\n## Contribution\n\nThe SHRMEA framework is a novel, empirically grounded tool that compares employer and employee perspectives on SHRM using four dimensions and sixteen items. Future research should validate and extend it with longitudinal or mixed-method designs across other industries."
  },

  /* ---- Template: copy from here, paste right after the "[" line above ----
  {
    id: "my-new-article",
    title: "Title of the new article",
    authors: "Ahmad Hafizi Ahmad Giran, Puteri Fadzline Muhamad Tamyez, Muhammad Ashraf Fauri @ Fauzi",
    year: 2027,
    type: "Journal article",
    venue: "Journal name",
    status: "Published",
    abstract: "One or two sentences about the article.",
    link: "https://...",
    doi: "",
    pdf: "",
    tags: ["Sustainable HRM"]
  },
  ---- to here ---- */
];
