import React from "react";
import EducationalForm from "../EducationalForm";
export default class EducationalInfo extends React.Component {

  constructor(props) {
    super(props)

    this.onClickEditButton = this.onClickEditButton.bind(this)
    this.onClickSubmitButton = this.onClickSubmitButton.bind(this)
    this.state = {
      hideForm: true
    }
  }

  onClickEditButton() {
    this.setState({
      hideForm: false
    })
  }
  onClickSubmitButton() {
    this.setState({
      hideForm: false
    })
  }
  render () {
    let {
      degree,
      subject,
      uniName
    } = this.props.info

    console.log(this.props)

    let classNameEduInfo = this.state.hideForm ? 'EduInfo' : 'hide'
    let classNameForm = this.state.hideForm ? 'hide' : 'educationalForm'

    return(
      <div>
        <div className={classNameEduInfo}>
          <h3>Info  </h3>
          <div >{uniName}</div>
          <div >{subject}</div>
          <div >{degree}</div>
          <button onClick={this.onClickEditButton}>Edit</button>
        </div>

        <div className={classNameForm}>
          <EducationalForm onSubmit={(e) => {
              this.props.editEduForm(e, this.props.id);
              this.onClickSubmitButton()
            }}

            info={{uniName, degree, subject}}></EducationalForm>
        </div>
      </div>

    )

  }




}
