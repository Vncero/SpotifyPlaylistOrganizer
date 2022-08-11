// ! run 'xcopy '.\\src\\frontend\\components\\css\\' '.\\dist\\frontend\\components\\css\\' /-y /k /i /w' before `npm start` 
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Menu from './components/Menu';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(BrowserRouter, null,
    React.createElement(Routes, null,
        React.createElement(Route, { path: '/', element: React.createElement(App, null) }),
        React.createElement(Route, { path: '/options', element: React.createElement(Menu, null) }))));
//# sourceMappingURL=index.js.map