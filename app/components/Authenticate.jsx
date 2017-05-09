import React from 'react';
import axios from 'axios';

export default class Authenticate extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            isMailSent: false
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const mailAddress = this.refs.mailAddress.value;
        console.log(mailAddress);
        if (mailAddress.length > 0) {
            this.refs.mailAddress.value = '';
            axios.post('/authenticate', {
                mailAddress: mailAddress
            })
                // .then((res) => this.setState({ count: res.data.count }));
                .then((res) => {
                    if (res.data === "showModal") {
                        this.setState({
                            isMailSent: true
                        })
                    }
                })
        } else {
            this.refs.newTodo.focus();
        }
    }

    render() {
        const mockModal = () => {
            if (this.state.isMailSent) {
                return <h1>Go check your mail</h1>
            }
        }
        return (
            <div>
                <h1>Authentication</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Put in your e-mail address" ref="mailAddress" />
                    <button>Get Mail Verification</button>
                </form>
                {mockModal()}
            </div>
        )
    }
};
