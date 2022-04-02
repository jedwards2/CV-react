import React from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import PracticalInfo from "./PracticalInfo";

class Form extends React.Component {
  render() {
    return (
      <div>
        <GeneralInfo
          formElements={this.props.formElements}
          handleChange={this.props.handleChange}
        />
        <EducationInfo
          formElements={this.props.formElements}
          handleChange={this.props.handleChange}
        />
        <PracticalInfo
          formElements={this.props.formElements}
          handleChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Form;
