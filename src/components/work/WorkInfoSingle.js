import React from "react";
import WorkForm from "./WorkForm";
/*
class WorkInfoSingles extends React.Component {

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
*/

export default function WorkInfoSingle (props) {


  console.log('xxx')
  if (props.info.editing) {
    console.log('aaaa')
    return <WorkForm info={props.info} func={props.formFunc} target={props.info.work}></WorkForm>
  }
  else {
    console.log('bb')
    return (

      <div>
        <div>
        {props.info.compName}

        </div>
        <div>
        {props.info.posTitle}

        </div>
        <div>
        {props.info.mainTasks}

        </div>

        <button onClick={ () => {
          props.edit(props.info)
        }} >Edit</button>
      </div>
    )
  }







}
