import React, { useState } from "react";
import AddWorkButton from "./AddWorkButton";
import WorkForm from "./WorkForm";
import WorkInfoSingle from "./WorkInfoSingle";

let workKey = 0
/*
class WorkMains extends React.Component {

  constructor(props) {
    super(props)
    this.workButtonStuff = this.workButtonStuff.bind(this)
    this.workButtonFunction = this.workButtonFunction.bind(this)
    this.workSubmit = this.workSubmit.bind(this)
    this.workList = this.workList.bind(this)
    this.workEdit = this.workEdit.bind(this)
    this.submitWorkEdit = this.submitWorkEdit.bind(this)
    this.state = {
      showWorkForm: false
    }
  }

  workButtonStuff () {
    if (this.state.showWorkForm) {
      return (
        <WorkForm func={this.workSubmit}></WorkForm>
      )
    } else {
      return (
        <AddWorkButton func={this.workButtonFunction}></AddWorkButton>
      )
    }
  }

  workButtonFunction () {
    this.setState({
      showWorkForm: true
    })
  }

  workSubmit (e) {
    let obj = {},
        parent = e.target.parentElement,
        inputs = parent.querySelectorAll('input'),
        textarea = parent.querySelector('textarea')

    inputs.forEach(inp => {
      obj[inp.id] = inp.value
    });
    obj[textarea.id] = textarea.value

    workKey += 1
    obj.work = `work${workKey}`
    obj.editing = false
    this.setState({
      [obj.work]: obj,
      showWorkForm: false
    })


  }


  workList () {
    let values = Object.values(this.state)



    values = values.filter(val => val.work).reverse()

    values = values.map (val => {
      return (
      <WorkInfoSingle

      info={val}
      key={val.work}
      edit={this.workEdit}
      formFunc={this.submitWorkEdit}
      >
      </WorkInfoSingle>
      )

    })

    return values
  }

  workEdit (obj) {
    let target = this.state[obj.work]
    target.editing = true
    this.setState({
      [obj.work]: target
    })
  }

  submitWorkEdit (e, wrk) {
    let obj = {},
        parent = e.target.parentElement,
        inputs = parent.querySelectorAll('input'),
      textarea = parent.querySelector('textarea')


    inputs.forEach(inp => {
      obj[inp.id] = inp.value
    });

    obj[textarea.id] = textarea.value
    obj.work = wrk
    obj.editing = false
    this.setState({
      [obj.work]: obj,
    })
  }


  render () {
    return (
      <div>
        {this.workButtonStuff()}

        <div id="workList">
          {this.workList()}
        </div>
      </div>
    )
  }
}

*/


function WorkList (workItems, workEdit, submitWorkEdit) {
  let values = Object.values(workItems).reverse()
  values = values.map (val => {

    return (
    <WorkInfoSingle

    info={val}
    key={val.work}
    edit={workEdit}
    formFunc={submitWorkEdit}
    >
    </WorkInfoSingle>
    )

  })

  console.log(values)
  return values
}

export default function WorkMain(props) {
  const [workItems, setWorkItems] = useState({})
  const [showWorkForm, setShowWorkForm] = useState(false)

  function submitWorkEdit (e, wrk) {
    let obj = {},
        parent = e.target.parentElement,
        inputs = parent.querySelectorAll('input'),
      textarea = parent.querySelector('textarea')


    inputs.forEach(inp => {
      obj[inp.id] = inp.value
    });

    obj[textarea.id] = textarea.value
    obj.work = wrk
    obj.editing = false

    let copy = { ... workItems}
    setWorkItems(Object.assign(copy, {[obj.work]: obj}))
  }

  function workEdit (obj) {
    let target = workItems[obj.work]
    target.editing = true

    let copy = {... workItems}
    setWorkItems(Object.assign(copy, {[obj.work]: target}))

  }




  function workSubmit (e) {
    let obj = {},
        parent = e.target.parentElement,
        inputs = parent.querySelectorAll('input'),
        textarea = parent.querySelector('textarea')

    inputs.forEach(inp => {
      obj[inp.id] = inp.value
    });
    obj[textarea.id] = textarea.value

    workKey += 1
    obj.work = `work${workKey}`
    obj.editing = false


    setShowWorkForm(false)


    setWorkItems(Object.assign(workItems, {[obj.work]: obj}))
  }



  function workButtonFunction () {
    setShowWorkForm(true)
  }
  function workButtonStuff () {
    if (showWorkForm) {
      return (
        <WorkForm func={workSubmit}></WorkForm>
      )
    } else {
      return (
        <AddWorkButton func={workButtonFunction}></AddWorkButton>
      )
    }
  }


  console.log('rerender')

  return (

    <div>
      {workButtonStuff()}

      <div id="workList">
        {WorkList(workItems, workEdit, submitWorkEdit)}
      </div>
    </div>
  )

}
