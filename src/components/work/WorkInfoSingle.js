import React from "react";
import WorkForm from "./WorkForm";

export default class WorkInfoSingle extends React.Component {

  constructor (props) {
    super(props)
  }

  render() {
    console.log(this.props)

    if (this.props.info.editing) {
      return <WorkForm info={this.props.info} func={this.props.formFunc} target={this.props.info.work}></WorkForm>
    }
    else {
      return (
        <div>
          <div>
          {this.props.info.compName}

          </div>
          <div>
          {this.props.info.posTitle}

          </div>
          <div>
          {this.props.info.mainTasks}

          </div>

          <button onClick={ () => {
            this.props.edit(this.props.info)
          }} >Edit</button>
        </div>
      )
    }


  }
}
