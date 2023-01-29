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
    let {uniName, degree, subject} = this.props.info || {}
    return (
      <div>


        <label htmlFor="uniName">University Name</label>
        <input type="text" id="uniName" defaultValue={uniName}/>

        <label htmlFor="degree">Degree</label>
        <input type="text" id="degree" defaultValue={degree} />

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" defaultValue={subject}/>
        <button onClick={this.submit}>Submit</button>
      </div>
    )
  }

}
