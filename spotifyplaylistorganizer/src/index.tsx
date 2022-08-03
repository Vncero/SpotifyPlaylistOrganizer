import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Router, Route } from '../node_modules/react-router-dom/index';

import { Spotify } from './organizer';

import App from './components/App';
import Login from './components/Login';

const express = require('express');
const app = express();
const port = process.env.port || 3000;

let token: any;

const root = ReactDOM.createRoot(document.getElementById("root")!);

const onError = (err: any) => console.error(err);

<Route path = '/' component = {App}/>

app.get('/api/login', () => token = Spotify.login());

app.get('/api/redirect', (_req: any, res: any) => res.send(token));

app.listen(port,
    () => {console.log('Listening on portt: ' + port)},
    onError
);

export {token};