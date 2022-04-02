import React from "react";

class EducationlInfo extends React.Component {
  render() {
    return (
      <div className="info--div">
        <h3>Education Info</h3>
        <label htmlFor="schoolNameInput">School Name: </label>
        <input
          name="schoolNameInput"
          type="text"
          onChange={(e) => this.props.handleChange(e, "school")}
          value={this.props.formElements.school}
        ></input>
        <label htmlFor="degreeInput">Degree: </label>
        <input
          name="degreeInput"
          type="text"
          onChange={(e) => this.props.handleChange(e, "degree")}
          value={this.props.formElements.degree}
        ></input>
        <label htmlFor="dateOfStudyInput">Date of Study: </label>
        <input
          name="dateOfStudyInput"
          type="date"
          onChange={(e) => this.props.handleChange(e, "date")}
          value={this.props.formElements.date}
        ></input>
      </div>
    );
  }
}

export default EducationlInfo;
