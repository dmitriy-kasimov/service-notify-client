import {WebView, onServer} from "alt-client";

let browser: WebView = new WebView('http://resource/frontend/index.html');

onServer('any:service-notify:c:alert', (message: string) => {
    browser.emit("c:f:alert", message);
    browser.focus();
})

onServer('any:service-notify:c:notification', (message: string) => {
    browser.emit("c:f:notification", message);
    browser.focus();
})
