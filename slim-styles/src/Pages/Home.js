import React,{ Component } from 'react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";

class Home extends Component {
    render() {
        return(
            <>
            <Header />
            <Navbar />
            <h1> This is my Home Page</h1>
            </>
        )
    }
}

export default Home;


