import React from 'react';
import axios from 'axios';
const io = require('socket.io-client')
const socket = io();

export default class Tweets extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            tweets: []
        }
        socket.on('new Tweet', (payload) => {
            const newTweetsList = [...this.state.tweets, payload]
            this.setState({ tweets: newTweetsList })
        })
    }


    // fetchTweets() {
        // return axios.get('/tweets')
        //     .then((res) => {
        //         console.log(res.data)
        //         this.setState({ tweets: res.data.tweets })
        //     });
    // },

    componentDidMount() {
        // return this.fetchTweets();
        socket.emit('room', { room: 'mockRoom' });
        return axios.get('/tweets')
            .then((res) => {
                const tweets = res.data;
                this.setState({ tweets: res.data })
            });
    }

    componentWillReceiveProps(nextProps) {
        socket.emit('room', { room: 'mockRoom' })
    }

    componentDidUpdate() {
        //     return axios.get('/tweets')
        // .then((res) => {
        //     console.log(res.data)
        //     this.setState({ tweets: res.data.tweets })
        // });
    }

    render() {
        const tweetsList = () => {
            if (!this.state.tweets) {
                return <h1>Loading</h1>
            } else {
                return this.state.tweets.map((tweet, index) => {
                    return <li key={index}>{tweet.title}</li>
                })
            }
        }
        return (
            <div>
                <h1>Tweets are: </h1>
                {tweetsList()}
            </div>
        )
    }
};
