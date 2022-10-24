import * as React from 'react';
import { useNavigate } from 'react-router';
import Spotify from '../../backend/organizer';
import './css/Menu.css';
export default function Menu() {
    const navigate = useNavigate();
    const listUserPlaylists = () => {
        Spotify.getUserPlaylists();
    };
    return (React.createElement("div", null,
        React.createElement("h1", null, "Hi!"),
        React.createElement("button", { onClick: () => { navigate('/'); } }, "Return to Home"),
        React.createElement("button", { onClick: () => { listUserPlaylists(); } }, "Test Spotify Functions")));
}
//# sourceMappingURL=Menu.js.map