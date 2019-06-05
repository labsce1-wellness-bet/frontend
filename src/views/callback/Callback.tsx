import React from "react";

export interface HomeProps { }

const fetchUserData = () => {
    axios
	.get('https://wellness-bet-backend.herokuapp.com/users/1')
	.then(res => {
	    const user = res.data;
	    this.set
	})
	.catch(err => console.log(err));
}

const Callback: React.SFC<HomeProps> = () => {
    /* constructor(props) {
       super(props);
       this.state = {
       users: []
       };
     * }

     * componentDidMount() {
       axios
       .get('https://wellness-bet-backend.herokuapp.com/users/1')
       .then(res => {
       const users = res.data;
       this.setState({users})
       })
       .catch(err => console.log(err));
     * }*/
    
    return <div>
        Home
        <h1>Callback page, you're logged in.</h1>
        <p>{users.id}</p>
    </div>;
};

export default Callback;
