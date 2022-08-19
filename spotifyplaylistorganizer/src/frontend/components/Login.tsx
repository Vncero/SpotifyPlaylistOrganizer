import * as React from 'react';
import { useEffect } from 'react';

import './css/Login.css';

export default function Login(): React.ReactElement {
    useEffect(() => {
        localStorage.tokenExpires = Date.now() + 3600 * 1000;
        localStorage.token = window.location.hash.split('&')[0].split('=')[1];
        console.log(localStorage.getItem('token'));
        window.close()
    }, []);

    return localStorage.getItem('token') 
            ? <button onClick={() => window.close()}>Token stored, close window now</button>
            : <h1>I don't even know anymore.</h1>
}

// this was very questionable but it did work as a workaround for getting the token without a static html file
/* const scriptTag = document.createElement('script');
        scriptTag.async = true;

        // this is fairly questionable but if it works I guess
        const script = document.createTextNode(`
                console.log('hello from useEffect script tag');
                (() => {
                    localStorage.tokenExpires = Date.now() + 3600 * 1000;
                    localStorage.token = window.location.hash.split('&')[0].split('=')[1];
                    console.log(localStorage.getItem('token'));
                })();
        `);

        scriptTag.appendChild(script);

        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        } */