// ! run 'xcopy '.\\src\\frontend\\components\\css\\' '.\\dist\\frontend\\components\\css\\' /-y /k /i /w' before `npm start` 

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './components/App';
import Menu from './components/Menu';

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/options' element={<Menu />} />
        </Routes>
    </BrowserRouter>
);