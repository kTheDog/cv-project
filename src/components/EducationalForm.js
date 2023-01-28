import React from "react";
    // eslint-disable-next-line no-unreachable
export default class EducationalForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const className = this.props.hide ? 'hide' : 'EducationalForm'
    let copy = this.props.info;
    if (!copy) {
      copy = {}
    }

    let {
      uniName,
      degree,
      subject
    } = copy

    console.log(copy)
    return(

    <div className={className} onChange={() => {}}>
      <h2>Education Experience</h2>
      <label htmlFor="uniName">University Name</label>
      <input type="text" id="uniName" defaultValue={uniName}/>

      <label htmlFor="degree">Degree</label>
      <input type="text" id="degree" defaultValue={degree} />

      <label htmlFor="subject">Subject</label>
      <input type="text" id="subject" defaultValue={subject}/>

      <button onClick={this.props.onSubmit}>Submit</button>
    </div>
    )
  }
}
