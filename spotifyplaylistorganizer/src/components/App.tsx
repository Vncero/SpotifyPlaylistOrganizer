import * as React from 'react';

import './css/App.css';

export default class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            
        };
    }

    render(): React.ReactNode {
        return (
            <div id = 'app'>
                <div id = 'header'>
                    <h1>SpotifyPlaylistOrganizer</h1>
                    <button id = 'login' onClick={}>Login</button> //redirect to login on express-router
                </div>
            </div>
        );
    }
}