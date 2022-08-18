import * as express from 'express';
const path = require('path');
const app = express();
const port = 8080;
app.use('/api/redirect/', express.static(path.join(__dirname, '/login')))
    .listen(port, () => console.log('Listening on port: ' + port));
//# sourceMappingURL=server.js.map