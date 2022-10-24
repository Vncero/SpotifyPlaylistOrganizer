import * as React from 'react';
import { useNavigate } from 'react-router';
import Spotify from '../../backend/organizer';

import './css/Menu.css';

export default function Menu(): React.ReactElement {
    const navigate = useNavigate();

    const listUserPlaylists = () => {
        Spotify.getUserPlaylists();
    }

    return (
        <div>
            <h1>Hi!</h1>
            <button onClick={() => {navigate('/')}}>Return to Home</button>
            <button onClick={() => {listUserPlaylists()}}>Test Spotify Functions</button>
        </div>
    );
}