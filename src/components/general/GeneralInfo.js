import React from "react";

export default class GeneralInfo extends React.Component {

  constructor(props) {
    super(props)

  }



  render() {
    const {aboutYou, firstNameInput, lastNameInput, emailInput, numberInput} = this.props.info
    return (
      <div>
        <h1>General Info</h1>
        <div>First Name {firstNameInput}</div>
        <div>Last Name {lastNameInput}</div>
        <div>Email {emailInput}</div>
        <div>Number {numberInput}</div>
        <div>About {aboutYou}</div>


        <button onClick={this.props.edit}>Edit</button>
      </div>
    )
  }

}
