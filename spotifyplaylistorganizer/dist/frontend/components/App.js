import * as React from 'react';
import { Link } from 'react-router-dom';
import Spotify, { client } from '../../backend/organizer';
import './css/App.css';
export default class App extends React.Component {
    render() {
        return (React.createElement("div", { id: 'app' },
            React.createElement("div", { id: 'header' },
                React.createElement("h1", null, "SpotifyPlaylistOrganizer"),
                React.createElement("div", { id: 'header-buttons' },
                    React.createElement("button", { id: 'login', onClick: () => Spotify.login().then((data) => {
                            var _a;
                            console.info(data);
                            client.token = (_a = localStorage.getItem('token')) !== null && _a !== void 0 ? _a : '';
                        }) }, " Login "),
                    client.token ? React.createElement(Link, { to: '/options' }, " Sort Playlists ") : React.createElement("h3", { id: 'notLoggedIn' }, " Log in to sort playlists ")))));
    }
}
//# sourceMappingURL=App.js.map