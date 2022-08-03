import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../components/App';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(BrowserRouter, null,
    React.createElement(Routes, null,
        React.createElement(Route, { path: '/', element: React.createElement(App, null) }))));
//# sourceMappingURL=index.js.map