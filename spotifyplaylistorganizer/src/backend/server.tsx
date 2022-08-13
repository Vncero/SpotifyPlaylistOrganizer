import { client } from './organizer';
import * as express from 'express';
import { Request, Response } from 'express';

const app = express();
const port = 3000;
const onError = (err: any) => console.error(err);

app.get('/api/redirect', function(_req: Request, res: Response) {
    res.writeHead(200, 'redirected after login');
    res.json(client.token);
    res.redirect(307, '/');
    res.end();
});

app.listen(port, () => {console.log('Listening on port ' + port)});
