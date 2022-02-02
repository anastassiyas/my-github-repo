  import React from 'react';
  import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
  


import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div>

    <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/about" component= {Profile} />

    
    </Switch>
    </Router>
    
    
    </div>
  );
}
  
    export default App;





// import './App.css';
// // import Header from "../src/components/Header/index";
// import Navbar from "../src/components/Navbar";
// import Header from "./components/Header"
// import Section from "./components/Section";

// function App() {
//   return (
//   <>
//    <Header /> 
//    <Navbar />
//    <Section />
   
//   </>
  
//   );
// }

// export default App;
