import React from "react";

export default class GeneralForm extends React.Component {

  constructor(props) {
    super(props)

  }



  render() {

    const {aboutYou, firstNameInput, lastNameInput, emailInput, numberInput} = this.props.info || {}

    return (
      <div onChange={() => {}}>
        <h2>General Info</h2>
        <label htmlFor="firstNameInput">First Name</label>
        <input type="text" id="firstNameInput" defaultValue={firstNameInput} />

        <label htmlFor="lastNameInput">Last Name</label>
        <input type="text" id="lastNameInput" defaultValue={lastNameInput} />

        <label htmlFor="emailInput">Email</label>
        <input type="email" id="emailInput" defaultValue={emailInput} />

        <label htmlFor="numberInput">Number</label>
        <input type="tel" id="numberInput" defaultValue={numberInput} />

        <label htmlFor="aboutYou">About You</label>
        <textarea id="aboutYou" defaultValue={aboutYou} ></textarea>

        <button onClick={this.props.onSubmit}>Submit</button>
    </div>
    )
  }

}
