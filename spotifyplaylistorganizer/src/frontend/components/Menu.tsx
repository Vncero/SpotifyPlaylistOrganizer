import * as React from 'react';
import { useNavigate } from 'react-router';

import './css/Menu.css';

export default function Menu(): React.ReactElement {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Hi!</h1>
            <button onClick={() => {navigate('/')}}>Return to Home</button>
        </div>
    );
}