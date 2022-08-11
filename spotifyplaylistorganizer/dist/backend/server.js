import Constants from "./constants";
const express = require('express');
const app = express();
const port = process.env.port || 3000;
const onError = (err) => console.error(err);
app.get('/api/login', function (res) {
    res.send('Logging in...');
    // Constants.token = Spotify.login();
});
app.get('/api/redirect', function (_req, res) {
    res.json(Constants.token);
    res.redirect(307, '/options');
});
app.listen(port, () => { console.log('Listening on port: ' + port); }, onError);
//# sourceMappingURL=server.js.map