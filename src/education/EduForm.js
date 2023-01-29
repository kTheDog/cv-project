import React, { Component } from "react";


export default class EduForm extends Component {

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

  render() {
    let {uniName} = this.props.info || {}
    return (
      <div>
        <label htmlFor="uniName">University Name</label>
        <input type="text" id="uniName" defaultValue={uniName}/>
        <button onClick={this.submit}>Submit</button>
      </div>
    )
  }

}
