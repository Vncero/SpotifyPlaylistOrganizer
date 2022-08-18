import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Spotify, { client } from '../../backend/organizer';
import './css/App.css';
export default function App() {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    return (React.createElement("div", { id: 'app' },
        React.createElement("nav", { id: 'header' },
            React.createElement("h1", null, "SpotifyPlaylistOrganizer"),
            React.createElement("div", { id: 'header-buttons' },
                React.createElement("button", { id: 'login', onClick: () => {
                        if (!loggedIn) {
                            Spotify.login().then(() => {
                                var _a;
                                client.token = (_a = localStorage.getItem('token')) !== null && _a !== void 0 ? _a : '';
                                console.log('client.token: ' + client.token);
                                setLoggedIn(true);
                            });
                        }
                        else {
                            console.log('You\'re already logged in');
                        }
                    } }, !loggedIn ? 'Login' : 'Logged In'),
                loggedIn &&
                    React.createElement("button", { onClick: () => navigate('/options') })))));
}
//# sourceMappingURL=App.js.map