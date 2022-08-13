import { client } from './organizer';
const express = require('express');
const app = express();
const port = process.env.port || 3000;
const onError = (err) => console.error(err);
app.get('/api/redirect', function (_req, res) {
    res.json(client.token);
    res.redirect(307, '/');
});
app.listen(port, () => { console.log('Listening on port: ' + port); }, onError);
//# sourceMappingURL=server.js.map