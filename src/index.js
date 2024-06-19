import * as alt from 'alt-client';
let browserNotif = new alt.WebView('http://resource/frontend/index.html');
alt.onServer('any:ServiceNotify:c:showAlert', (title, body, type, showTime) => {
    browserNotif.emit("c:f:showAlert", title, body, type, showTime);
});
alt.onServer('any:ServiceNotify:c:showNotification', (id, title, body, showTime) => {
    browserNotif.emit("c:f:showNotification", id, title, body, showTime);
});
