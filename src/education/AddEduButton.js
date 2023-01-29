import React from "react";


export default class AddEduButton extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <button onClick={this.props.func}>Add Educational Experience</button>
  }
}
