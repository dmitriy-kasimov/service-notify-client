import * as alt from 'alt-client';
import * as native from 'natives';
import {WebView} from "alt-client";

let browserNotif: WebView = new alt.WebView('http://resource/frontend/index.html');

alt.onServer('any:ServiceNotify:c:showAlert', (title: string,
                               body: string,
                               type: string,
                               showTime: number,) => {
    browserNotif.emit("c:f:showAlert", title, body, type, showTime);
    browserNotif.focus();
})

alt.onServer('any:ServiceNotify:c:showNotification', (id: string,
                                          title: string,
                                          body: string,
                                          showTime: number,) => {
    browserNotif.emit("c:f:showNotification", id, title, body, showTime);
    browserNotif.focus();
})

alt.onServer('any:ServiceNotify:c:showModalInfo', (title: string,
                                                      body: string) => {
    browserNotif.emit("c:f:showModalInfo", title, body);
    browserNotif.focus();
})
