import React from 'react';
import ReactDOM from 'react-dom/client';
import './site.css';

class Login extends React.Component {
    render() {
        return (
            <Button id = "login">
                Login
            </Button>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Login />);