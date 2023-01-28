import React from "react";


export default class AddEducationButton extends React.Component {

  constructor(props){
    super(props)
  }

  render () {
    const className = this.props.hide ? 'hide' : 'EducationButton'
    return (
      <div className={className}>
        <button onClick={this.props.func}>Add Educational Experience</button>
      </div>
    )
  }

}
