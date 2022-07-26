import React from 'react';
import ReactDOM from 'react-dom/client';
import './site.css';

const express = require('express');
const app = Express();

class Login extends React.Component {
    render() {
        return (
            <Form id ='login'>
                <Input>

                </Input>
            </Form>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Login />);