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
            <div id = 'header'>
                <h1>SpotifyPlaylistOrganizer</h1>
            </div>
        );
    }
}