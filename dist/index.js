import * as r from "alt-client";
let s = new r.WebView("http://resource/frontend/index.html");
r.onServer("usia:s:notif:c:showAlert", (o, t, e, i) => {
  s.emit("c:f:showAlert", o, t, e, i);
});
r.onServer("usia:s:notif:c:showNotification", (o, t, e, i) => {
  s.emit("c:f:showNotification", o, t, e, i);
});
