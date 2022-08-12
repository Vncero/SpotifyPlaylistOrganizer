import * as React from 'react';
import { Link } from 'react-router-dom';
import Constants from '../../backend/constants';

import './css/App.css';

export default function App(props: any) {
        return (
            <div id = 'app'>
                <div id = 'header'>
                    <h1>SpotifyPlaylistOrganizer</h1>
                    <div id = 'header-buttons'>
                        <button onClick={() => window.location.replace('/api/login')}> Login </button>
                        {/* <Link to='/api/login'>Login</Link> */}
                        {/* <button onClick={() => window.location.replace('/options')}> Sort Playlists </button> */}
                        {typeof Constants.token !== 'object' ? <Link to='/options'> Sort Playlists </Link> : <h3 id='notLoggedIn'> Log in to sort playlists </h3>}
                    </div>
                </div>
            </div>
        );
}