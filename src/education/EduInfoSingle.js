import React from "react";
import EduForm from "./EduForm";


export default class EduInfoSingle extends React.Component {
  constructor(props){
    super(props)
  }



  render() {

    if (this.props.info.editing) {
      return <EduForm func={this.props.formFunc} target={this.props.info.edu} info={this.props.info}></EduForm>
    }
    else {
      return (
        <div>
          {this.props.info.uniName}
          <button onClick={() => {
            this.props.edit(this.props.info)
          }}
          >Edit</button>
        </div>
      )
    }


  }

}
