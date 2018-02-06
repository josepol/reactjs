import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentWillMount() {
        console.log('componentWillMount');
        console.log(this.state.name, this.props.name);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.submitForm}>
                    <input type="text" value={this.state.name} onChange={this.handleInputChange} />
                    <input type="submit" value="Send" />
                </form>
            </div>
        );
    }

    handleInputChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    submitForm(event) {
        console.log(this.state.name);
        event.preventDefault();
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