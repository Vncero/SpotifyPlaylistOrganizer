import * as React from 'react';
import { Link } from 'react-router-dom';
import Constants from '../../backend/constants';
import './css/App.css';
export default function App(props) {
    return (React.createElement("div", { id: 'app' },
        React.createElement("div", { id: 'header' },
            React.createElement("h1", null, "SpotifyPlaylistOrganizer"),
            React.createElement(Link, { to: '/api/login' }, "Login"),
            typeof Constants.token !== 'object' ? React.createElement("button", { onClick: () => window.location.replace('/options') }, " Sort Playlists ") : React.createElement("h3", { id: 'notLoggedIn' }, "Log in to sort playlists"))));
}
//# sourceMappingURL=App.js.map