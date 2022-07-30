import * as ReactDOM from 'react-dom/client';
import './site.css';
var express = require('express');
var app = express();
var port = process.env.port || 3000;
var root = ReactDOM.createRoot(document.getElementById("root"));
app.get('/', function (req) {
    root.render(/>: React.Component););
}, function (err) {
    console.error(err);
});
app.get('/login', function (req) {
    root.render(/>););
}, function (err) {
    console.error(err);
});
//# sourceMappingURL=index.js.map