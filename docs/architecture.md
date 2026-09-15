# Frontend architecture

`html_files/` contains six independent HTML pages. `css_files/` provides per-page styles, and `scripts.js/specialist_script.js` contains client-side interaction. `Tests/css` is an unstructured artifact, not an executable test suite.

The root directory now contains a simple index linking all existing screens. Broken links to absent screens are labelled unavailable; missing portrait/logo assets display descriptive text. Available relative assets are retained.

No server, database, API client configuration, Java source or deployment instructions are present here. The related [MindLink application](https://github.com/Joana-Mansa/MindLink_side) contains JSP/servlet artifacts but also needs source recovery. This repository should be evaluated as frontend coursework.

To extend it, first recover or define the backend contract. Then connect signup, specialist selection and appointment forms to implemented endpoints, with explicit success/error states. Current sample specialist identities are demonstration content.
