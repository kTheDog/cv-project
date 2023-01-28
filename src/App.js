import React from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import GeneralInfo from "./components/showInfo/GeneralInfo";
import EducationalForm from "./components/EducationalForm"
import EducationalInfo from "./components/showInfo/EducationalInfo";
import AddEducationButton from "./components/buttons/AddEducationButton";
import * as ReactDOM from 'react-dom/client';
let eduID = 0
class App extends React.Component {
  constructor() {
    super()

    this.onFormChange = this.onFormChange.bind(this)
    this.onSubmitGeneralInfoForm = this.onSubmitGeneralInfoForm.bind(this)
    this.editGeneralInfo = this.editGeneralInfo.bind(this)
    this.onSubmitEduForm = this.onSubmitEduForm.bind(this)
    this.onAddEducationButton = this.onAddEducationButton.bind(this)
    this.onEditEduForm = this.onEditEduForm.bind(this)
    this.state = {
      hideGeneralInfoForm: false,
      hideEduButton: false
    }

  }

  onFormChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })

    console.log(this.state)
  }

  editGeneralInfo(e) {
    this.setState({
      hideGeneralInfoForm: false
    })
  }


  onSubmitGeneralInfoForm() {


    const {
      aboutYou,
      firstNameInput,
      lastNameInput,
      emailInput,
      numberInput
    } = this.state
    if (!(
      aboutYou &&
      firstNameInput &&
      lastNameInput &&
      emailInput &&
      numberInput
    )) {}
    this.setState({
      hideGeneralInfoForm: true
    })
    console.log(this.state)
  }


  onSubmitEduForm(e) {
    let replaceThis = e.target.parentElement,
        allInputs = replaceThis.querySelectorAll('input'),
        obj = {}

    allInputs.forEach(element => {
      obj[element.id] = element.value
    });
    eduID += 1
    obj.edu = `edu${eduID}`
    this.setState({
      [`edu${eduID}`]: obj,
    })
    console.log(this.state)
  }
  onEditEduForm(e, key) {
    let replaceThis = e.target.parentElement,
    allInputs = replaceThis.querySelectorAll('input'),
    obj = {edu: key}
    allInputs.forEach(element => {
      obj[element.id] = element.value
      console.log(element.value)
    });

    console.log(obj)
    this.setState({
      [obj.edu]: obj,
    })


  }


  onAddEducationButton() {
    this.setState({
      hideEduButton: true
    })

    let element = () => {
      return (
        <EducationalForm
        onSubmit = {this.onSubmitEduForm}
        hide = {this.state.hideEduButtonhideEduButton}
        info = {{}}
        >
        </EducationalForm>
      )
    }
    console.log(element)
    let root = ReactDOM.createRoot(document.querySelector('.eduFormContainer'))
    root.render(element())

  }
  render () {

    const {
      onFormChange,
      onSubmitGeneralInfoForm,
      editGeneralInfo,
      onSubmitEduForm,
      onAddEducationButton,
      onEditEduForm
    } = this
    const {
      hideGeneralInfoForm,
      hideEduButton,
      aboutYou,
      firstNameInput,
      lastNameInput,
      emailInput,
      numberInput,
    } = this.state

    return (
      <div className="main">
        <GeneralInfoForm
          onFormChange={onFormChange}
          onSubmitGeneralInfoForm={onSubmitGeneralInfoForm}
          hide = {hideGeneralInfoForm}
          info={{aboutYou, firstNameInput, lastNameInput, emailInput, numberInput,}}
        >
        </GeneralInfoForm>

        <GeneralInfo
        info={{aboutYou, firstNameInput, lastNameInput, emailInput, numberInput,}}
        hide = {!hideGeneralInfoForm}
        editGeneralInfo = {editGeneralInfo}
        >
        </GeneralInfo>



        <AddEducationButton
        hide={hideEduButton}
        func={onAddEducationButton}

        >

        </AddEducationButton>
        <EducationalInfo parentState = {this.state} editEduForm={onEditEduForm}></EducationalInfo>
        <div className="eduFormContainer"></div>
      </div>
    )
  }

}



export default App;
