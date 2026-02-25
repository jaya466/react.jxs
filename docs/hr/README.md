# HR Issue Presentation

## Overview

This directory contains all materials for the **Employee Attrition & Talent Retention** HR issue presentation.
The presentation covers the rising attrition trend observed throughout 2024, its business impact, root causes,
and a set of concrete short-term and long-term recommendations.

---

## Files

| File | Description |
|------|-------------|
| [`HR_Issue_Presentation.md`](./HR_Issue_Presentation.md) | Main slide deck (Markdown format) with inline speaker notes |
| [`speaker_notes.md`](./speaker_notes.md) | Detailed speaker notes for each slide |
| [`data.csv`](./data.csv) | Raw data: headcount, attrition rate, time-to-hire, open roles (Jan–Dec 2024) |
| [`charts/attrition_chart.png`](./charts/attrition_chart.png) | Attrition rate trend chart (Jan–Dec 2024) |

---

## How to Present

### Option 1 – Marp (recommended)

[Marp](https://marp.app/) renders Markdown slides in your browser or exports to PDF/PPTX.

```bash
# Install Marp CLI
npm install -g @marp-team/marp-cli

# Preview slides in the browser
marp --preview docs/hr/HR_Issue_Presentation.md

# Export to PDF
marp docs/hr/HR_Issue_Presentation.md --pdf -o docs/hr/HR_Issue_Presentation.pdf

# Export to PPTX
marp docs/hr/HR_Issue_Presentation.md --pptx -o docs/hr/HR_Issue_Presentation.pptx
```

### Option 2 – VS Code + Marp Extension

Install the [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) extension,
open `HR_Issue_Presentation.md`, and click **Open Preview** in the top-right corner.

### Option 3 – Slidev

```bash
npm install -g @slidev/cli
slidev docs/hr/HR_Issue_Presentation.md
```

---

## Regenerating Charts from CSV

If the underlying data in `data.csv` changes, regenerate `charts/attrition_chart.png` with the following
Python snippet (requires `pandas` and `matplotlib`):

```python
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("docs/hr/data.csv")
attrition = df[df["metric"] == "attrition_rate_pct"].copy()
attrition["date"] = pd.to_datetime(attrition["date"])

plt.figure(figsize=(10, 5))
plt.plot(attrition["date"], attrition["value"], marker="o", color="#E74C3C", linewidth=2)
plt.title("Monthly Attrition Rate (%) – 2024", fontsize=14)
plt.xlabel("Month")
plt.ylabel("Attrition Rate (%)")
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("docs/hr/charts/attrition_chart.png", dpi=150)
print("Chart saved.")
```

---

## Reviewers

Please loop in the following stakeholders before the all-hands:

- **@hr-team** – data accuracy and policy recommendations
- **@product-leads** – business impact section
- **@finance** – budget estimates for proposed actions
- **@legal** – compliance considerations

---

## Presentation Timeline

| Slide | Topic | Time |
|-------|-------|------|
| 1 | Title | 0:30 |
| 2 | Executive Summary | 1:00 |
| 3 | Background | 1:30 |
| 4 | Problem Statement | 1:30 |
| 5 | Impact Analysis | 2:00 |
| 6 | Root Causes | 1:30 |
| 7 | Data & Evidence | 1:30 |
| 8 | Proposed Actions | 2:00 |
| 9 | Risks & Mitigations | 1:00 |
| 10 | Next Steps | 1:00 |
| 11 | Appendix / Q&A | open |

**Total estimated time:** 13–15 minutes + Q&A
