import React from "react";

/*
export default class AddEduButtons extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <button onClick={this.props.func}>Add Educational Experience</button>
  }
}
*/


export default function AddEduButton (props) {


  return <button onClick={props.func}>Add Educational Experience</button>

}
