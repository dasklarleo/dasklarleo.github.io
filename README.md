# Yuxiao Liu — academic homepage

An English academic profile for GitHub Pages. Plain HTML, CSS and JavaScript; no build system, third-party fonts, analytics, or runtime dependencies.

## Preview

Open `index.html` directly, or serve this directory locally:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

The site is hosted at https://dasklarleo.github.io/ from the `main` branch of https://github.com/dasklarleo/dasklarleo.github.io. GitHub Pages serves the repository root; `.nojekyll` enables static file delivery.

The existing Hexo articles and archives in `2019/`, `2021/`, and `archives/`, together with their original assets, are preserved. The footer links to the old blog archive.

## Edit content

- `index.html`: biography, research interests, and recent updates.
- `research.html`: research directions and DoctorGLM.
- `publications.html`: searchable publications and citation controls.
- `experience.html`: education, research visits, and industry experience.
- `cv.html`: printable academic CV, including awards and publications.
- `contact.html`: email and academic profile links.
- `styles.css`: colors, typography, responsive layouts and print styling.
- `app.js`: publication filtering, citation dialog, clipboard controls and mobile navigation.
- `publications.bib`: downloadable full bibliography.
- `publications.json`: structured publication metadata for reuse. The rendered publication entries and the `citation-data` blocks in the HTML pages must be updated alongside this file.
- `assets/portrait.png`: the portrait provided by the site owner.

The page displays the owner’s academic email and portrait. It does not display a phone number, birth date, home address, student number or job-application documents. No unrelated private workspace files are included.

## Content provenance

Education, internship, doctoral status, research visit, awards and training contributions are based on information supplied by Yuxiao Liu. The current status remains **PhD student**; no awarded doctorate or completed graduation date is claimed.

Bibliographic metadata for the four first-author papers was checked against Crossref, the publisher and/or PubMed:

- https://doi.org/10.1016/j.media.2026.104063
- https://pubmed.ncbi.nlm.nih.gov/42013614/
- https://doi.org/10.1109/TMI.2024.3525022
- https://doi.org/10.1007/978-3-031-43993-3_10
- https://doi.org/10.1109/ISBI53787.2023.10230532
- https://arxiv.org/abs/2304.01097
- https://github.com/xionghonglin/DoctorGLM

DoctorGLM uses the author list shown by arXiv, including Linlin Huang; the repository README’s shorter BibTeX entry differs. Paper descriptions are original summaries, not copied abstracts. The three research illustrations are original conceptual diagrams, not experimental results. Conference award names are descriptive English translations of the names supplied by the owner.

Optional additions awaiting the owner: supervisor and laboratory, UCL host, individual publication code repositories, and additional publications. These have not been guessed or displayed as placeholders.

Content verified and prepared on 9 October 2026.
