import React from 'react';
import "../Styles/Header.css";

const styles= {
    headerStyle: {
        //styling here
        backgroundColor: 'transparent', 
        fontSize: '50px',
        color: 'hotPink'
    },
    headingStyle: {
        postion: 'absolute',
        marginLeft: '500px'
    },
    head: {
        fontFamily: 'cursive',
        backgroundColor: 'black'
        
    }
}

//Inline styling wrap around {{style= }}
function Header () {
return (

    <div className="header">
    <h1 style= {{color: "red", fontSize: "20px", fonFamily: "cursive" }}>Welcome</h1>  
    <h2 style={styles.headingStyle}>Styles by Slim</h2>
   
    <a href="#">Click Me</a>
    <a href="#">Click Me</a>
    <a href="#">Click Me</a>
    </div> 


)
}
export default Header;

   

