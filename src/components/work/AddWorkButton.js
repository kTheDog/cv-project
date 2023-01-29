import React from "react";


export default class AddWorkButton extends React.Component {

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
