import * as React from 'react';
import './css/Login.css';
export default function Login() {
    React.useEffect(() => {
        const scriptTag = document.createElement('script');
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
        };
    }, []);
    return localStorage.getItem('token')
        ? (React.createElement("button", { onClick: () => window.close() }, "Token stored, close window now"))
        : React.createElement("h1", null, "I don't even know anymore.");
}
//# sourceMappingURL=Login.js.map