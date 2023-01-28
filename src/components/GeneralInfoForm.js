import React from "react";
export default class GeneralInfoForm extends React.Component {

  constructor(props){
    super(props)
  }

  render () {
    const onFormChange = this.props.onFormChange,
          onSubmit = this.props.onSubmitGeneralInfoForm;
    const className = this.props.hide ? 'hide' : 'generalInfoForm'
    const {aboutYou, firstNameInput, lastNameInput, emailInput, numberInput} = this.props.info
    return(
    <div onChange={onFormChange} className={className}>
        <h2>General Info</h2>
        <label htmlFor="firstNameInput">First Name</label>
        <input type="text" id="firstNameInput" value={firstNameInput}/>

        <label htmlFor="lastNameInput">Last Name</label>
        <input type="text" id="lastNameInput" value={lastNameInput}/>

        <label htmlFor="emailInput">Email</label>
        <input type="email" id="emailInput" value={emailInput}/>

        <label htmlFor="numberInput">Number</label>
        <input type="tel" id="numberInput" value={numberInput}/>

        <label htmlFor="aboutYou">About You</label>
        <textarea id="aboutYou" value={aboutYou}></textarea>

        <button onClick={onSubmit}>Submit</button>
    </div>
    )
  }

}
