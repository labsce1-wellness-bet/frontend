import * as React from "react";
import axios from 'axios';

//export interface HomeProps { }

export default class User extends React.Component {
    state = {
	users: []
    }

    componentDidMount() {
	axios
	    .get('https://wellness-bet-backend.herokuapp.com/api/user/1')
	    .then(res => {
		const users = res.data;
		this.setState({users})
	    })
	    .catch(err => console.log(err));
    }
    
    render() {
	return (
	    <div>
		<h1>User</h1>
		<h1>{this.state.users}</h1>
	    </div>
	)
    }
};
