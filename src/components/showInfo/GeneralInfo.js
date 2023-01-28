import React from "react";


export default class generalInfo extends React.Component {

  constructor(props) {
    super(props)
  }



  render () {

    const {aboutYou, firstNameInput, lastNameInput, emailInput, numberInput} = this.props.info
    const className = this.props.hide ? 'hide' : 'generalInfo',
          editGeneralInfo = this.props.editGeneralInfo
    return (
      <div className={className}>
        <h1>General Info</h1>
        <div>First Name {firstNameInput}</div>
        <div>Last Name {lastNameInput}</div>
        <div>Email {emailInput}</div>
        <div>Number {numberInput}</div>
        <div>About {aboutYou}</div>

        <button onClick={editGeneralInfo}>Edit</button>
      </div>
    )
  }
}
