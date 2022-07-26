import ReactDOM from 'react-dom/client';
import App from './components/App';
import Login from './components/Login';

import './site.css';

const express = require('express');
const app = express();
const port = process.env.port || 3000;
const root = ReactDOM.createRoot(document.getElementById("root"));

app.get('/', 
    function(req) {
        root.render(<App />);
    },
    function(err) {
        console.error(err);
    }
);

app.get('/login',
    function(req) {
        root.render(<Login />);
    },
    function(err) {
        console.error(err);
    }
)