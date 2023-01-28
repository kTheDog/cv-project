import React, { Component } from "react";
import EducationalInfoSingle from "./EducationalInfoSingle"

export default class EducationalInfo extends Component {

  constructor(props) {
    super(props)
    this.key = 0
    this.array = this.array.bind(this)
  }

  array (arr) {
    let copy = Object.values(arr)

    return copy.map((value) => {
      if (!value.edu) return;
      this.key += 1
      return <EducationalInfoSingle
      info = {value}
      key = {value.edu}
      editEduForm = {this.props.editEduForm}
      id = {value.edu}
      >
      </EducationalInfoSingle>
    })
  }

  render () {
    console.log(this.props.parentState)
    return <div>{this.array(this.props.parentState)}</div>
  }
}
