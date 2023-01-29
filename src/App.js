import React from "react";
import * as ReactDOM from 'react-dom/client';
import GeneralForm from "./components/general/GeneralForm";
import GeneralInfo from "./components/general/GeneralInfo";
import AddEduButton from "./components/education/AddEduButton";
import EduForm from "./components/education/EduForm";
import EduInfoSingle from "./components/education/EduInfoSingle";
import WorkMain from "./components/work/WorkMain";

let eduKey = 0

class App extends React.Component {

  constructor() {
    super()
    this.generalStuff = this.generalStuff.bind(this)
    this.generalFormOnSubmit = this.generalFormOnSubmit.bind(this)
    this.generalFormEdit = this.generalFormEdit.bind(this)
    this.eduButtonFunc = this.eduButtonFunc.bind(this)
    this.eduButtonStuff = this.eduButtonStuff.bind(this)
    this.submitEduButton = this.submitEduButton.bind(this)
    this.eduList = this.eduList.bind(this)
    this.eduEdit = this.eduEdit.bind(this)
    this.submitEduEdit = this.submitEduEdit.bind(this)
    this.state = {
      showGeneralForm: true,
      showEduForm: false
    }
  }

  generalStuff () {
    let {showGeneralForm, generalInfo} = this.state
    if (showGeneralForm) {
      return (
        <GeneralForm onSubmit={this.generalFormOnSubmit} info={generalInfo}></GeneralForm>
      )
    }
    else {
      return (
        <GeneralInfo info={generalInfo} edit={this.generalFormEdit}></GeneralInfo>
      )
    }
  }

  generalFormOnSubmit (e) {

    let obj = {},
        parent = e.target.parentElement,
        inputs = parent.querySelectorAll('input'),
        textarea = parent.querySelector('textarea')

    inputs.forEach(inp => {
      obj[inp.id] = inp.value
    });

    obj[textarea.id] = textarea.value

    this.setState({
      generalInfo: obj,
      showGeneralForm: false
    })
  }

  generalFormEdit () {
    this.setState({
      showGeneralForm: true
    })
  }
  eduButtonFunc () {
    this.setState({
      showEduForm: true
    })
  }
  eduButtonStuff () {
    let {showEduForm} = this.state

    if (showEduForm) {
      return <EduForm func={this.submitEduButton}></EduForm>
    }
    else {
      return <AddEduButton func={this.eduButtonFunc}></AddEduButton>
    }
  }

  submitEduButton (e) {
    let obj = {},
        parent = e.target.parentElement,
        inputs = parent.querySelectorAll('input')

    inputs.forEach(inp => {
      obj[inp.id] = inp.value
    });

    eduKey += 1
    obj.edu = `edu${eduKey}`
    obj.editing = false
    this.setState({
      [obj.edu]: obj,
      showEduForm: false
    })
  }

  submitEduEdit (e, ed) {
    let obj = {},
        parent = e.target.parentElement,
        inputs = parent.querySelectorAll('input')

    inputs.forEach(inp => {
      obj[inp.id] = inp.value
    });

    obj.edu = ed
    obj.editing = false
    this.setState({
      [obj.edu]: obj,
    })
  }
  eduList() {

    let values = Object.values(this.state)



    values = values.filter(val => val.edu).reverse()

    values = values.map (val => {
      return <EduInfoSingle
      info={val}
      key={val.edu}
      edit={this.eduEdit}
      formFunc={this.submitEduEdit}>
      </EduInfoSingle>
    })

    return values
  }


  eduEdit (obj) {
    let target = this.state[obj.edu]
    target.editing = true
    this.setState({
      [obj.edu]: target
    })
    console.log(this.state)
  }

  render() {



    return (
      <div className="App">
          <div id="general">
            {this.generalStuff()}
          </div>

          <div id="education">
            {this.eduButtonStuff()}
            <div id="eduList">
              {this.eduList()}
            </div>
          </div>

          <div id="work">
            <WorkMain></WorkMain>
          </div>

      </div>
    );
  }

}
export default App;
