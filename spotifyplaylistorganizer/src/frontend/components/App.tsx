import * as React from 'react';
import { Link } from 'react-router-dom';
import Constants from '../../backend/constants';

import './css/App.css';

export default class App extends React.Component<[], any> {
    constructor(props: []) {
        super(props);
        this.state = {
            
        };
    }

    render(): React.ReactNode {
        return (
            <div id = 'app'>
                <div id = 'header'>
                    <h1>SpotifyPlaylistOrganizer</h1>
                    <Link to='/api/login'>Login</Link>
                    (Constants.token !== {} ? <Link to='/options' /> : <h3 id='notLoggedIn'>Login to sort your playlist!</h3>)
                </div>
            </div>
        );
    }
}