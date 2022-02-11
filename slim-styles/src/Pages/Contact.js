import React, { Component } from 'react';
import Header from "../components/Header/index";
import Navbar from "../components/Navbar/index";
import Bootstrap from "../components/Bootstrap/index";
import Form from "../components/Form/index";
import List from "../components/List";
// import Scheduler from "../components/Scheduler"









const service = [
    {
        id: 1,
        name: "Cuts",
        price: 9.99
    },
    {
        id: 2,
        name: "Braids",
        price: 9.99

    },
    {
        id: 3,
        name: "Twists",
        price: 9.99
    },
    {
        id: 4,
        name: "Color/Dyes",
        price: 9.99
    },
    {
        id: 5,
        name: "Style",
        price: 9.99
    },
    {
        id: 6,
        name: "Hair growth",
        price: 9.99
    }
]
class Contact extends Component {
    render() {
        return (
            <>
                <Form />
                <Header />
                <Navbar />
                <Bootstrap />
                <div className="section" style={{ backgroundColor: "blue" }}>
                    <h1> This is my Contact pages</h1>
                    <List service={service} />;
                </div>
            </>
        )
    }
}

export default Contact;
