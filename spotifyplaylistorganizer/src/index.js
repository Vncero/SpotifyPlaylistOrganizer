import React from 'react';
import ReactDOM from 'react-dom/client';
import './site.css';

class Button extends React.Component {
    render() {
        return (
            <Button>{"Wow"}</Button>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Button />);