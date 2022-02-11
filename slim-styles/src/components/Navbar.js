import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css";




function navbar() {
return(
<>
  <div className="navbar">
            <ul className="App-header">
              <li>
                <Link to="/">Home|</Link>
              </li>
              <li>
                <Link to="/about"> About Us |</Link>
              </li>
              <li>
                <Link to="/contact"> Contact Us |</Link>
              </li>
            </ul>
  </div>
</>
)
}
export default navbar;
















// function navbar( ){
// return(
//     <div className='navbar'>
//    <ul className="App-header">
//        <li>
//            <Link to="/">Home|</Link>
//         </li>
//         <li>
//            <Link to="/">About Us|</Link>
//         </li>
//         <li>
//            <Link to="/">Contact Us|</Link>
//         </li>
//        </ul>
//    </div>
    
    
  
// )
// }
//     export default navbar;

// // function navbar() {
// // return(
// //         <div>
// //             <h3>Check me Out</h3>
// //         <nav className="Navbar">
// //  <a href="#"> Click Me</a>
// //  <a href="#"> Click Me</a>
// //  <a href="#"> Click Me</a>
// //  </nav>
// //         </div>
// //     )
// // }



// export default navbar;