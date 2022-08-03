import * as React from 'react';
import { Link } from 'react-router-dom';
import './css/App.css';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement("div", { id: 'app' },
            React.createElement("div", { id: 'header' },
                React.createElement("h1", null, "SpotifyPlaylistOrganizer"),
                React.createElement(Link, { to: 'http://localhost:8080/api/login' }, "Login"))));
    }
}
//# sourceMappingURL=App.js.map