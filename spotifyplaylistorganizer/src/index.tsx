import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './components/App';
import Login from './components/Login';

const express = require('express');
const app = express();
const port = process.env.port || 3000;

const root = ReactDOM.createRoot(document.getElementById("root")!);

const onError = function(err: any): void {console.error(err);} 

app.get('/', 
    function(_req: any): void {
        root.render(<App />)
    },
    onError
);

app.get('/login',
    function(_req: any): void {
        root.render(<Login />)
    },
    onError
);

app.listen(port,
    function(_req: any): void {
        console.log('Listening on port: ' + port);
    },
    onError
)