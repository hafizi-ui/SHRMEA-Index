# SHRMEA website

Static website for the SHRMEA (Sustainable HRM Employer–Employee Alignment) research.
Hosted on GitHub Pages. No build step is needed.

| File | Page |
|---|---|
| index.html | Home |
| research.html | About the Research |
| findings.html | Findings & Publications |
| article.html | Reader for full-text articles (opened from Findings) |
| team.html | Team & Contact |
| tool.html | Assessment Tool with two modules (password protected, encrypted) |
| data/articles.js | **The list of articles. Edit this file to add publications.** |
| data/firms.js | **Case firm names, profiles and ER/EE scores. Edit this file to rename firms.** |
| papers/ | Put PDF files here |
| assets/ | Shared style and script |

## The Assessment Tool: two modules
Both modules use the same 16 indicators, A / P / X scoring (1 / 0.5 / 0) and the four gap pillars (Knowledge, Incentive, Resource, Value).

- **Cross Firm Analysis (Employer–Employee).** Compares up to 10 firms. For each firm the employer view (ER) is rated against the employee view (EE). Outputs: alignment %, maturity stage, signed ER − EE gaps, spider profiles, firm ranking and a Fix-First pillar per firm.
- **Cross Department Analysis.** Benchmarks the departments of one firm (editable names) against each other. Each department gets one A / P / X rating on the 16 indicators (department wordings); there is no second rater. Outputs: maturity % and stage per department, ranking, firm-wide average, spread and consistency (Consistent / Variable / Fragmented), strongest and weakest department, indicator hotspots (weak in ≥ 50 % of departments), Fix-First pillar per department, systemic pillar when most departments share it, a department × indicator heatmap, spider charts and action cards. This module is a tool extension, not a thesis finding.

The Home page ("Two ways to use SHRMEA") and the Research page ("Two lenses: across firms and across departments") describe both modules. The Findings page is unchanged because the department module is not a thesis finding.

## Add an article
1. Open the website → Findings & Publications → "Add a new article" → fill the form → Generate → Copy.
2. In GitHub open `data/articles.js` → pencil icon → paste on the empty line right after `window.SHRMEA_ARTICLES = [` → Commit changes.

## Rename or edit the case firms
In GitHub open `data/firms.js` → pencil icon → change the text inside the quotes (e.g. `name: "Firm A"`) → Commit changes. The Research and Findings pages, the table, bar chart and quadrant chart update automatically.

## Change the tool password
tool.html is encrypted with the password. Ask for a new tool.html to be generated with the new password.
