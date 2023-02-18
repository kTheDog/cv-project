import React, { useState } from "react";
import * as ReactDOM from 'react-dom/client';
import GeneralForm from "./components/general/GeneralForm";
import GeneralInfo from "./components/general/GeneralInfo";
import AddEduButton from "./components/education/AddEduButton";
import EduForm from "./components/education/EduForm";
import EduInfoSingle from "./components/education/EduInfoSingle";
import WorkMain from "./components/work/WorkMain";

let eduKey = 0

function App () {
  const [showGeneralForm, setShowGeneralForm] = useState(true)
  const [showEduForm, setShowEduForm] = useState(false)
  const [generalInfo, setGeneralInfo] = useState(null)
  const [eduObjects, setEduObjects] = useState({})
  function generalStuff () {
    if (showGeneralForm) {
      return (
        <GeneralForm onSubmit={generalFormOnSubmit} info={generalInfo}></GeneralForm>
      )
    }
    else {
      return (
        GeneralInfo({info: generalInfo, edit: generalFormEdit})
      )
    }
  }

  function generalFormOnSubmit (e) {

    let obj = {},
        parent = e.target.parentElement,
        inputs = parent.querySelectorAll('input'),
        textarea = parent.querySelector('textarea')

    inputs.forEach(inp => {
      obj[inp.id] = inp.value
    });

    obj[textarea.id] = textarea.value

    setGeneralInfo(obj)
    setShowGeneralForm(false)
  }

  function generalFormEdit () {
    setShowGeneralForm(true)
  }
  function eduButtonFunc () {
    setShowEduForm(true)
  }
  function eduButtonStuff () {

    if (showEduForm) {
      return <EduForm func={submitEduButton}></EduForm>
    }
    else {
      return <AddEduButton func={eduButtonFunc}></AddEduButton>
    }
  }

  function submitEduButton (e) {
    let obj = {},
        parent = e.target.parentElement,
        inputs = parent.querySelectorAll('input')

    inputs.forEach(inp => {
      obj[inp.id] = inp.value
    });

    eduKey += 1
    obj.edu = `edu${eduKey}`
    obj.editing = false


    let copy = {...eduObjects}
    setEduObjects(Object.assign(copy, {[obj.edu]: obj}))
    setShowEduForm(false)
  }

  function submitEduEdit (e, ed) {
    let obj = {},
        parent = e.target.parentElement,
        inputs = parent.querySelectorAll('input')

    inputs.forEach(inp => {
      obj[inp.id] = inp.value
    });

    obj.edu = ed
    obj.editing = false

    let copy = {...eduObjects}
    setEduObjects(Object.assign(copy, {[obj.edu]: obj}))
  }
  function eduList() {

    let values = Object.values(eduObjects)



    values = values.filter(val => val.edu).reverse()

    values = values.map (val => {
      return <EduInfoSingle
      info={val}
      key={val.edu}
      edit={eduEdit}
      formFunc={submitEduEdit}>
      </EduInfoSingle>
    })

    return values
  }


  function eduEdit (obj) {
    let target = eduObjects[obj.edu]
    target.editing = true
    let copy = {...eduObjects}
    setEduObjects(Object.assign(copy, {[obj.edu]: obj}))
    console.log(eduObjects)
  }
  return (
    <div className="App">
        <div id="general">
          <h1>General Info</h1>

          {generalStuff()}
        </div>

        <div id="education">
          {eduButtonStuff()}
          <div id="eduList">
            {eduList()}
          </div>
        </div>

        <div id="work">
          <WorkMain></WorkMain>
        </div>

    </div>
  );


}
export default App;
