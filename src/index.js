import MiniTutorial from "mini-tutorial.js";
import mtThemeWhite from "mini-tutorial.js/themes/white.css";
import mtThemeBook from "mini-tutorial.js/themes/book.css";
import mtThemeCommon from "mini-tutorial.js/themes/common.css";
import myStylesheet from "./style.css";

import hljs from 'highlight.js/lib/highlight';
import hljsLangXML from 'highlight.js/lib/languages/xml';
import hljsLangCSS from 'highlight.js/lib/languages/css';
import hljsLangJS from "highlight.js/lib/languages/javascript";
import hljsLangJSON from "highlight.js/lib/languages/json";
import hljsStyle from "highlight.js/styles/atom-one-light.css";

async function fetchChapters(chapters, callback) {
    let response = null;
    let html = "";

    for(let i = 0; i < chapters.length; i++) {
        response = await fetch(chapters[i]);
        html += await response.text();
    }

    if (document.readyState == "complete") {
        callback(html);
    } else {
        window.addEventListener("load", () => callback(html));
    }
}

function startApplication(html) {
    if (html) {
        let main = document.querySelector("main");
        main.innerHTML = html;
    }

    hljs.registerLanguage("html", hljsLangXML);
    hljs.registerLanguage("css", hljsLangCSS);
    hljs.registerLanguage("javascript", hljsLangJS);
    hljs.registerLanguage("json", hljsLangJSON);
    document.querySelectorAll("pre code").forEach(el => hljs.highlightBlock(el));

    let mt = new MiniTutorial();
    mt.start();
}

fetchChapters([
    "01-vorbereitungen.html",
    "02-statisches.html",
    "03-templates.html",
    "04-progressive.html",
    "05-epilog.html",
], startApplication);
