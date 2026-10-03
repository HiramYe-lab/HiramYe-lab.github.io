/* Generated at build time by scripts/mathjax_boot.js -- DO NOT EDIT BY HAND.
   Edit source/_data/mathjax-macros.json instead. */
(function () {
  'use strict';
  var macros = {
  "R": "\\mathbb{R}",
  "norm": [
    "\\left\\lVert #1 \\right\\rVert",
    1
  ],
  "dd": "\\mathrm{d}",
  "plr": [
    "\\left( #1 \\right)",
    1
  ],
  "blr": [
    "\\left\\{ #1 \\right\\}",
    1
  ],
  "bcup": "\\bigcup",
  "bcap": "\\bigcap",
  "def": "\\overset{\\text{def}}{=}"
};
  window.MathJax = window.MathJax || {};
  window.MathJax.tex = window.MathJax.tex || {};
  window.MathJax.tex.macros = Object.assign({}, window.MathJax.tex.macros || {}, macros);
  var script = document.createElement('script');
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js";
  script.async = true;
  document.head.appendChild(script);
})();
