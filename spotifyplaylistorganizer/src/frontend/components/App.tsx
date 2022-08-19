import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Spotify, { client } from '../../backend/organizer';

import './css/App.css';

export default function App(): React.ReactElement {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(Boolean(client.token));
    return (
        <div id = 'app'>
            <nav id = 'header'>
                <h1>SpotifyPlaylistOrganizer</h1>
                <div id = 'header-buttons'>
                    <button id = 'login' onClick={(): void => {
                        if (!loggedIn) {Spotify.login().then(() => {
                            client.token = localStorage.getItem('token') ?? '';
                            console.log('client.token: ' + client.token);
                            setLoggedIn(true);
                        })} else {
                            console.log('You\'re already logged in');
                        }
                    }}>{!loggedIn ? 'Login' : 'Logged In'}</button>
                    {loggedIn && 
                        <button onClick={() => navigate('/options')}>Customize Sorting</button>
                    }
                </div>
            </nav>
        </div>
    );
}