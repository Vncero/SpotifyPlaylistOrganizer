import * as React from 'react';
import { Link } from 'react-router-dom';
import './css/App.css';

export default class App extends React.Component<any, any> {
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
                    <Link to='http://localhost:3000/api/login'>Login</Link>
                </div>
            </div>
        );
    }
}