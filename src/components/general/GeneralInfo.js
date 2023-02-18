import React from "react";
/*
export default class GeneralInf extends React.Component {

  constructor(props) {
    super(props)

  }



  render() {
    const {aboutYou, firstNameInput, lastNameInput, emailInput, numberInput} = this.props.info
    return (
      <div>
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
*/
export default function GeneralInfo (props) {
  const {aboutYou, firstNameInput, lastNameInput, emailInput, numberInput} = props.info
  return (
    <div>
      <div>First Name {firstNameInput}</div>
      <div>Last Name {lastNameInput}</div>
      <div>Email {emailInput}</div>
      <div>Number {numberInput}</div>
      <div>About {aboutYou}</div>


      <button onClick={props.edit}>Edit</button>
    </div>
  )

}
