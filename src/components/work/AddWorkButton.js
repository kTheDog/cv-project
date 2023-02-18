import React from "react";
/*

class AddWorkButton extends React.Component {

  constructor(props) {
    super(props)
  }


  render () {
    return (
      <div>
        <button onClick={this.props.func}> Add Work Experience</button>
      </div>
    )
  }
}
*/

export default function AddWorkButton (props) {


  return (
    <div>
      <button onClick={props.func}> Add Work Experience</button>
    </div>
  )
}
