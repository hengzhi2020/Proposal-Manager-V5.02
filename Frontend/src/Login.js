import React, { Component } from 'react';
import './App.css';
import App from './App';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: null
        }
    }

    render() {
        if (this.state.redirect) {
            return (
                <div>
                    <App DATA={this.props.DATA} />
                </div>
            )
        };
        return (
            <div className="App" >
                <main className="main-login">
                    <button type='submit' id='btn-to-ldap' onClick={() => this.setState({ redirect: true })} >Proposal Manager</button>
                </main>
            </div>
        );
    }
}

export default Login;
