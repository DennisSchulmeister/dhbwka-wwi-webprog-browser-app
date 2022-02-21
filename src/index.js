import MiniTutorial from "@dschulmeis/mini-tutorial.js";
import "@dschulmeis/mini-tutorial.js/themes/white.css";
import "@dschulmeis/mini-tutorial.js/themes/book.css";
import "@dschulmeis/mini-tutorial.js/themes/common.css";

import LS_Plugin_HighlightJS from "@dschulmeis/ls-plugin-highlight.js";
import HLJS_Language_XML from 'highlight.js/lib/languages/xml';
import HLJS_Language_CSS from 'highlight.js/lib/languages/css';
import HLJS_Language_JS from "highlight.js/lib/languages/javascript";
import HLJS_Language_JSON from "highlight.js/lib/languages/json";
import "highlight.js/styles/atom-one-light.css";

import "./style.less";

window.addEventListener("load", async () => {
    let mt = new MiniTutorial({
        download: [
            "01-vorbereitungen.html",
            "02-statisches.html",
            "03-templates.html",
            "04-progressive.html",
            "05-epilog.html",
        ],
        plugins: [
            new LS_Plugin_HighlightJS({
                languages: {
                    html: HLJS_Language_XML,
                    css: HLJS_Language_CSS,
                    javascript: HLJS_Language_JS,
                    json: HLJS_Language_JSON,
                },
                highlightAll: true,
            }),
        ],
    });

    mt.start();
});
