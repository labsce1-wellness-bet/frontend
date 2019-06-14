import * as React from "react";
import axios from 'axios';

export interface HomeProps { }

const Callback: React.SFC<HomeProps> = () => {
    /* state = {
       users: []
     * }

     * componentDidMount(); {
       axios
       .get('https://wellness-bet-backend.herokuapp.com/user/1')
       .then(res => {
       const users = res.data;
       this.setState({users})
       })
       .catch(err => console.log(err));
     * }*/
    
    return <div>
        Home
        <h1>Callback page, you're logged in.</h1>
    </div>;
};

export default Callback;

