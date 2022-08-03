import { Spotify } from "../organizer";
import Constants from "./constants";
const express = require('express');
const app = express();
const port = process.env.port || 8080;
const onError = (err) => console.error(err);
app.get('/api/login', function () {
    Constants.token = Spotify.login();
});
app.get('/api/redirect', function (_req, res) { res.json(Constants.token); });
app.listen(port, () => { console.log('Listening on portt: ' + port); }, onError);
//# sourceMappingURL=server.js.map