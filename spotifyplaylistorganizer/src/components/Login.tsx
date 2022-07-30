import * as React from 'react';

import './css/Login.css';

type LoginInfo = Readonly<{
    uid?: number,
    un: string,
}>;

export default class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            login: Login
        };
    }

    render() {
        return (
            <form id='login'>
                <input>
                    
                </input>
            </form>
        );
    }
}