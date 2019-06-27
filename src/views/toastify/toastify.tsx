import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Toastify extends Component {
    notify = () => toast("Wow so easy !");
    
    render(){
	return (
            <div>
		<button onClick={this.notify}>Notify !</button>
		<ToastContainer />
            </div>
	);
    }
}
