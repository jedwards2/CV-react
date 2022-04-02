import React from "react";

class GeneralInfo extends React.Component {
  render() {
    return (
      <div className="info--div">
        <h3>General Info</h3>
        <label htmlFor="nameInput">Name: </label>
        <input
          name="nameInput"
          type="text"
          onChange={(e) => this.props.handleChange(e, "name")}
          value={this.props.formElements.name}
        ></input>
        <label htmlFor="emailInput">Email: </label>
        <input
          name="emailInput"
          type="email"
          onChange={(e) => this.props.handleChange(e, "email")}
          value={this.props.formElements.email}
        ></input>
        <label htmlFor="phoneInput">Phone Number: </label>
        <input
          name="phoneInput"
          type="phone"
          onChange={(e) => this.props.handleChange(e, "phone")}
          value={this.props.formElements.phone}
        ></input>
      </div>
    );
  }
}

export default GeneralInfo;
