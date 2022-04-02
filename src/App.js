import React from "react";
import Form from "./components/Form";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showEdit: true,
      showSubmit: false,
      name: "",
      email: "",
      phone: "",
      school: "",
      degree: "",
      date: "",
      company: "",
      position: "",
      dateJoined: "",
      dateLeft: "",
    };
  }
  handleChange = (e, name) => {
    console.log("hi");
    this.setState({ [name]: e.target.value });
    console.log(this.state);
  };

  handleEdit = () => {
    this.setState({
      showEdit: !this.state.showEdit,
      showSubmit: !this.state.showSubmit,
    });
  };

  handleSubmit = () => {
    this.setState({
      showSubmit: !this.state.showSubmit,
      showEdit: !this.state.showEdit,
    });
  };

  render() {
    const keys = Object.keys(this.state);
    keys.splice(0, 2);
    const formElements = keys.map((key) => (
      <div key={key}>
        <h3>{`${key}: ${this.state[key]}`}</h3>
      </div>
    ));

    return (
      <div>
        {!this.state.showEdit && (
          <button type="button" onClick={this.handleEdit}>
            Edit CV
          </button>
        )}
        {!this.state.showSubmit && (
          <button type="button" onClick={this.handleSubmit}>
            Submit CV
          </button>
        )}

        {this.state.showEdit && (
          <Form formElements={this.state} handleChange={this.handleChange} />
        )}
        {this.state.showSubmit && formElements}
      </div>
    );
  }
}

export default App;
