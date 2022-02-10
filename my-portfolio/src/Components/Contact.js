import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-600 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=428+east+iowa+ave+denver+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-600 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-yellow-200 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                428 E Iowa ave. <br />
                DENVER, C0 80210
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-yellow-200 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-blue-600 leading-relaxed">
                ana.savost@yahoo.com
              </a>
              <h2 className="title-font font-semibold text-yellow-200 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-blue-600 sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          {/* <p className="leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p> */}
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-blue-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-600 rounded border border-gray-700 focus:border-blue-600 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-blue-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-600 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-blue-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-600 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-yellow-200 bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
// import React from 'react';

// // class Contact extends Component {
// //   // Setting the component's initial state
// //   state = {
// //     firstName: "",
// //     lastName: "", 
// //     password: ""
// //   };

// //   handleInputChange = event => {
// //     // Getting the value and name of the input which triggered the change
// //     const { name, value } = event.target;

// //     // Updating the input's state
// //     this.setState({
// //       [name]: value
// //     });
// //   };

// //   handleFormSubmit = event => {
// //     // Preventing the default behavior of the form submit (which is to refresh the page)
// //     event.preventDefault();

// //     // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
// //     alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
// //     this.setState({
// //       firstName: "",
// //       lastName: "",
// //       password: ""
// //     });
// //   };

// //   render() {
// //     // Notice how each input has a `value`, `name`, and `onChange` prop
// //     return (
// //       <div>
       
// //           <form
// //            netlify
// //            name="contact"
// //           //  onSubmit={handleSubmit}
// //           className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
// //           <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">            Hire Me
// //            </h2>

// //         <p>
// //           Hello {this.state.firstName} {this.state.lastName}
// //         </p>

// //         <div className="relative mb-4">
// //              {/* <label htmlFor="name" className="leading-7 text-sm text-gray-400">
// //               </label> */}
// //             <input
// //             value={this.state.firstName}
// //             type="text"
// //             id="name"
// //             name="firstName"
// //             className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
// //             onChange={this.handleInputChange}
// //             placeholder="First Name"
// //           />
// //           </div>
// //           <div className="relative mb-4">
// //           <input
// //             value={this.state.lastName}
// //             type="text"
// //             name="lastName"
// //             className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
// //             onChange={this.handleInputChange}
// //             placeholder="Last Name"
// //           />
// //           </div>

// //           <div className="relative mb-4">
// //              {/* <label htmlFor="name" className="leading-7 text-sm text-gray-400">
// //               </label> */}
// //             <input
// //             value={this.state.password}
// //             type="text"
// //             id="name"
// //             name="password"
// //             className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
// //             onChange={this.handleInputChange}
// //             placeholder="Password"
// //           />
// //           </div>

// //           <button onClick={this.handleFormSubmit}
// //               type="submit"
// //               className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
// //           Submit
// //           </button>
          
// //         </form>
// //       </div>

      
// //     );
// //   }
// // }

// // export default Contact;



//  function Contact() {
//     const [firstName, setName] = React.useState("");
//     const [lastName, setEmail] = React.useState("");
//     const [password, setMessage] = React.useState("");
  
//     function encode(data) {
//       return Object.keys(data)
//         .map(
//           (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
//         )
//         .join("&");
//     }
  
//     function handleSubmit(e) {
//       e.preventDefault();
//       fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: encode({ "form-name": "contact", firstName, lastName, password }),
//       })
//         .then(() => alert("Message sent!"))
//         .catch((error) => alert(error));
//     }
  
//     return (
//       //// <section id="contact" className="relative">
//       //   <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
//       //     <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
//       //       <iframe
//       //         width="100%"
//       //         height="100%"
//       //         title="map"
//       //         className="absolute inset-0"
//       //         frameBorder={0}
//       //         marginHeight={0}
//       //         marginWidth={0}
//       //         style={{ filter: "opacity(0.7)" }}
//       //         src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
//       //       />
//       //       <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
//       //         <div className="lg:w-1/2 px-6">
//       //           <h2 className="title-font font-semibold text-white tracking-widest text-xs">
//       //             ADDRESS
//       //           </h2>
//       //           <p className="mt-1">
//       //             E Iowa ave<br />
//       //             DENVER, CO 80222
//       //           </p>
//       //         </div>
//       //         <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
//       //           <h2 className="title-font font-semibold text-white tracking-widest text-xs">
//       //             EMAIL
//       //           </h2>
//       //           <a className="text-indigo-400 leading-relaxed">
//       //           ana.savostina@yahoo.com
//       //           </a>
//       //           <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
//       //             PHONE
//       //           </h2>
//       //           <p className="leading-relaxed">123-456-7890</p>
//       //         </div>
//       //       </div>
//       //////     </div>
//           <div>
//           <form
//             netlify
//             name="contact"
//             onSubmit={handleSubmit}
//             className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
//             <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
//               Hire Me
//             </h2>
//             <p className="leading-relaxed mb-5">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
//               suscipit officia aspernatur veritatis. Asperiores, aliquid?
//             </p>
//             <div className="relative mb-4">
//               <label htmlFor="name" className="leading-7 text-sm text-gray-400">
//                First Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="relative mb-4">
//               <label htmlFor="email" className="leading-7 text-sm text-gray-400">
//                Last Name
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="relative mb-4">
//               <label
//                 htmlFor="message"
//                 className="leading-7 text-sm text-gray-400">
//                 Password
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//             </div>
//             <button
//               type="submit"
//               className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//               Submit
//             </button>
//           </form>
         
//         </div>
//       // </section>
//     );
//   }
//   export default Contact;