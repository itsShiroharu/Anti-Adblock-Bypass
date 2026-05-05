// ==UserScript==
// @name         Bypass The 3Labs Team's Anti-Adblock
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Anti-adblock (The 3Labs Team) bypass script for Tampermonkey. Detects and disables Anti-adblock and it's restrictions to restore full site functionality.
// @author       Shengwei Xiong
// @match        https://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    function unlockPage() {
        document.querySelectorAll('div[style*="z-index: 999999"], div[style*="background-color: rgba(0,0,0,0.68)"]').forEach(el => {
            el.remove();
        });

        document.querySelectorAll('div').forEach(el => {
            if (el.innerHTML.includes('Adblock!') || el.innerHTML.includes('Stop!')) {
                el.remove();
            }
        });

        const html = document.documentElement;
        const body = document.body;

        if (html) {
            html.style.overflow = 'visible !important';
            html.style.overflowY = 'auto !important';
            html.style.height = 'auto !important';
            html.style.position = 'static !important';
        }

        if (body) {
            body.style.overflow = 'visible !important';
            body.style.overflowY = 'auto !important';
            body.style.height = 'auto !important';
            body.style.position = 'static !important';
            body.style.filter = 'none !important';
            body.style.opacity = '1 !important';
            body.style.pointerEvents = 'auto !important';
        }

        window.adBlockDetected = false;
        window.detectAdBlock = () => false;
        if (typeof window.showBannerAdBlock === 'function') window.showBannerAdBlock = () => {};
    }

    const observer = new MutationObserver(unlockPage);
    observer.observe(document.documentElement, { childList: true, subtree: true });

    window.addEventListener('load', unlockPage);
    setTimeout(unlockPage, 100);
    setTimeout(unlockPage, 500);
    setTimeout(unlockPage, 1000);
    setInterval(unlockPage, 2000);
})();
