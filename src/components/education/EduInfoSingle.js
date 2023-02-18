import React from "react";
import EduForm from "./EduForm";
/*

class EduInfoSingles extends React.Component {
  constructor(props){
    super(props)
  }



  render() {
    let {uniName, degree, subject} = this.props.info
    if (this.props.info.editing) {
      return <EduForm func={this.props.formFunc} target={this.props.info.edu} info={this.props.info}></EduForm>
    }
    else {
      return (
        <div>

          <div> {uniName}</div>
          <div>{degree}</div>
          <div>{subject}</div>

          <button onClick={() => {
            this.props.edit(this.props.info)
          }}
          >Edit</button>
        </div>
      )
    }


  }

}
*/
export default function EduInfoSingle(props) {




  let {uniName, degree, subject} = props.info
    if (props.info.editing) {
      return <EduForm func={props.formFunc} target={props.info.edu} info={props.info}></EduForm>
    }
    else {
      return (
        <div>

          <div> {uniName}</div>
          <div>{degree}</div>
          <div>{subject}</div>

          <button onClick={() => {
            props.edit(props.info)
          }}
          >Edit</button>
        </div>
      )
    }

}
