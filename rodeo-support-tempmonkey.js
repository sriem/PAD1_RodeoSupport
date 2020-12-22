// ==UserScript==
// @name         PAD1_RodeoSupport
// @namespace    https://www.amazon.com
// @version      0.0.1
// @description  A Rodeo Supportscript for PAD1
// @author       riemas@
// @credits      dhhollst@
// @include      *https://rodeo-dub.amazon.com/PAD1/*
// @updateURL    https://github.com/sriem/PAD1_RodeoSupport/raw/master/rodeo-support-tempmonkey.js
// @downloadURL  https://github.com/sriem/PAD1_RodeoSupport/raw/master/rodeo-support-tempmonkey.js
// @require      https://vuejs.org/js/vue.min.js
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @require      https://github.com/sriem/PAD1_RodeoSupport/raw/master/rodeo-support-app.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_setClipboard
// @run-at       document-body
// @noframes
// ==/UserScript==

window.jq = $.noConflict(true);

(function () {
    'use strict';
    rodeoHelper.isReady(function () {
        rodeoHelper.addStyle();
        rodeoHelper.startApp();
    });
})();
