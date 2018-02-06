import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }

    }

    componentWillMount() {
        console.log('componentWillMount');
        console.log(this.state.name, this.props.name);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidCatch() {
        console.log('componentDidCatch');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}

export default Login;