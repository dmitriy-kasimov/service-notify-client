import * as alt from 'alt-client';
import * as native from 'natives';
import {WebView} from "alt-client";

let browserNotif: WebView = new alt.WebView('http://resource/frontend/index.html');

alt.onServer('any:ServiceNotify:c:showAlert', (title: string,
                               body: string,
                               type: string,
                               showTime: number,) => {

    browserNotif.emit("c:f:showAlert", title, body, type, showTime);
})

alt.onServer('any:ServiceNotify:c:showNotification', (id: string,
                                          title: string,
                                          body: string,
                                          showTime: number,) => {

    browserNotif.emit("c:f:showNotification", id, title, body, showTime);
})