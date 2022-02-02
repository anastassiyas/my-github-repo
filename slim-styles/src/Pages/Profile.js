
import React,{ Component } from 'react';

import Header from "../components/Header";
import Navbar from "../components/Navbar";

class Profile extends Component {
    render() {
        return(
            <>
            <Header />
            <Navbar />
            <h1> This is my Profile Page</h1>
            </>
        )
    }
}

export default Profile;
