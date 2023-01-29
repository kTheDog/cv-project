import React from "react";
import AddWorkButton from "./AddWorkButton";
import WorkForm from "./WorkForm";
import WorkInfoSingle from "./WorkInfoSingle";

let workKey = 0

export default class WorkMain extends React.Component {

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
        dasdas
        {this.workButtonStuff()}

        <div id="workList">
          {this.workList()}
        </div>
      </div>
    )
  }
}
