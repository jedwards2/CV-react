import React from "react";

class PracticalInfo extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="companyNameInput">Company Name: </label>
        <input
          name="companyNameInput"
          type="text"
          onChange={(e) => this.props.handleChange(e, "company")}
          value={this.props.formElements.company}
        ></input>
        <label htmlFor="positionInput">Position: </label>
        <input
          name="positionInput"
          type="text"
          onChange={(e) => this.props.handleChange(e, "position")}
          value={this.props.formElements.position}
        ></input>
        <label htmlFor="dateJoinedInput">Date Joined: </label>
        <input
          name="dateJoinedInput"
          type="date"
          onChange={(e) => this.props.handleChange(e, "dateJoined")}
          value={this.props.formElements.dateJoined}
        ></input>
        <label htmlFor="dateLeftJoined">Date Left: </label>
        <input
          name="dateLeftJoined"
          type="date"
          onChange={(e) => this.props.handleChange(e, "dateLeft")}
          value={this.props.formElements.dateLeft}
        ></input>
      </div>
    );
  }
}

export default PracticalInfo;
