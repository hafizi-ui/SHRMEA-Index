/*
  SHRMEA — case firms shown on the website
  ----------------------------------------
  Edit this file to change firm names or details. The Research and Findings pages
  (profiles, table, bar chart and quadrant chart) all update automatically.

  How to edit on GitHub: open data/firms.js → pencil icon → change the text inside the
  quotes "..." → Commit changes. Keep the quotes, commas and brackets as they are.

  Fields:
    name        name shown everywhere (e.g. "Firm A" or the real firm name)
    industry    industry / sector
    profile     short description (Research page)
    er          employer score out of 16
    ee          employee score out of 16
    gap         main gap pillar: "Knowledge" | "Incentive" | "Resource" | "Value"
    gapLabel    text shown for the gap (e.g. "Resource / maturity gap")
    diagnosis   what the gap looks like in this firm (Findings page)
    fixFirst    recommended first action (Findings page)
*/
window.SHRMEA_FIRMS = [
  {
    name: "Firm A",
    industry: "Engineering plastics",
    profile: "About 2,000 employees. Carbon neutrality target by 2050, with a focus on circular economy and recycling.",
    er: 8.0,
    ee: 5.5,
    gap: "Knowledge",
    gapLabel: "Knowledge gap",
    diagnosis: "A top-down, management-led approach. Management treats the sustainability report as a success, but employees find it long and hard to engage with. The deficit is in communication and awareness.",
    fixFirst: "Build capability through floor-level literacy training."
  },
  {
    name: "Firm B",
    industry: "Oil & gas",
    profile: "About 50,000 employees. Net-zero carbon emissions target by 2050.",
    er: 10.0,
    ee: 6.0,
    gap: "Incentive",
    gapLabel: "Incentive gap",
    diagnosis: "Sustainability is treated as external compliance and a technical challenge. Strong infrastructure and targets exist, but employees don’t see sustainability reflected in how they are evaluated or rewarded. It has the widest ER–EE gap, with 8 of 16 indicators disputed.",
    fixFirst: "Link sustainability to KPIs and rewards."
  },
  {
    name: "Firm C",
    industry: "Engineered electronic components",
    profile: "About 4,000 employees. Net-zero target by 2030.",
    er: 12.5,
    ee: 8.5,
    gap: "Resource",
    gapLabel: "Resource / maturity gap",
    diagnosis: "The benchmark case. Employees can name the specific investments behind the firm’s zero-emission goal. No indicator falls to zero; the disagreement is about degree and consistency across shifts and sites.",
    fixFirst: "Make practice consistent across lines and sites."
  }
];
