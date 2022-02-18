import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Testimonials";


function App() {
  return (
    <main className="text-blue-700 bg-gray-300 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
export default App; 
// import Home from "./Components/Pages/Home";
// import About from "./Components/Pages/About";
// import Projects from "./Components/Pages/Projects";
// import Contact from "./Components/Pages/Contact";



// function App() {
//   return (
    
      

//     <Router>
//     <Switch>
//     <div className="App">
//     <Route exact path="/" component={Home} />
//     <Route exact path="/about" component={About} />
//     <Route exact path="/projects" component={Projects} />
//     <Route exact path="/contact" component={Contact} />

  
//           <Link to="/" className="item">Home</Link>
//           <Link to="/projects" className="item">Project</Link>
//           <Link to="/about" className="item">About</Link> 
//           <Link to="/contact" className="item">Contact</Link>  

//           </div>
//     </Switch>
//     </Router>
  
    
    
 
//   );
// }
  
    // export default App;





