import * as React from 'react';

import './css/App.css';
import NavBar from './NavBar';

export default function App(): React.ReactElement {
    return (
        <div id = 'app'>
            <NavBar />
        </div>
    );
}