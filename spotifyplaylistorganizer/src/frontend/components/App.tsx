import * as React from 'react';
import { Link } from 'react-router-dom';
import Spotify, {client} from '../../backend/organizer';

import './css/App.css';

export default class App extends React.Component {
    render() {
        return (
            <div id = 'app'>
                <div id = 'header'>
                    <h1>SpotifyPlaylistOrganizer</h1>
                    <div id = 'header-buttons'>
                        <button id = 'login' onClick={() => Spotify.login().then((data: JSON) => {
                            console.info(data);
                            client.token = localStorage.getItem('token') ?? '';
                        })}> Login </button>
                        {client.token ? <Link to='/options'> Sort Playlists </Link> : <h3 id='notLoggedIn'> Log in to sort playlists </h3>}
                    </div>
                </div>
            </div>
        );
    }
}