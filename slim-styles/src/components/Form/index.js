import React, { Component } from "react";
// import "./components/Styles/Style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    password: "", 
    date: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    
    let value =  event.target.value;
    const name = event.target.name;

    if (name === "password"){
        value = value.substring(0,15);
    }

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName|| !this.state.lastName){
        alert("Fill out your first and last name please!");
    } else if(this.state.password.length < 6) {
alert(
    `Choose a more secure password ${this.state.firstName} ${this.state.lastName}`
);

    } else if (!this.state.date) {
        alert(`Please enter your date of birth`)
    } else if (!this.state.date < 18) {
        alert(`Please enter your date of birth`)    
    } else if(!this.state.email) {
        alert(`Please enter an email`)   
    }
    
    else {
        alert(`Hello ${this.state.firstName} ${this.state.lastName}`);

    }
    

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: "", 
      password: "",
      email: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Needs to be 6 Characters"
          />
           <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
           

              />
          <br></br>
          <br></br>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
