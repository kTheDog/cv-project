import React from "react";

export default class WorkForm extends React.Component {

  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this)
  }


  submit(e){
    if (this.props.target)
    {
      this.props.func(e, this.props.target)
    } else {
      this.props.func(e)
    }
  }

  render () {
    let {posTitle, compName, mainTasks} = this.props.info || {}
    return (
      <div>
        <label htmlFor="compName">Company Name</label>
        <input type="text" id="compName" defaultValue={compName}/>

        <label htmlFor="posTitle">Position Title</label>
        <input type="text" id="posTitle" defaultValue={posTitle} />

        <label htmlFor="posTitle">Position Title</label>

        <label htmlFor="mainTasks">Main Tasks</label>
        <textarea id="mainTasks" defaultValue={mainTasks}></textarea>

        <button onClick={this.submit}>Submit</button>
      </div>
    )
  }
}
