import {WebView, onServer, on} from "alt-client";

let browser: WebView = new WebView('http://resource/frontend/index.html');

onServer('s:c:alert', (message: string) => {
    browser.emit("c:f:alert", message);
    browser.focus();
})

onServer('s:c:notification', (message: string) => {
    browser.emit("c:f:notification", message);
    browser.focus();
})

on('c:c:alert', (payload: unknown) => {
    browser.emit("c:f:alert", payload);
    browser.focus();
})
on('c:c:notification', (payload: unknown) => {
    browser.emit("c:f:notification", payload);
    browser.focus();
})