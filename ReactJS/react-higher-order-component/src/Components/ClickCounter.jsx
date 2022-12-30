import React, { Component } from 'react'
import HOCcomponent from './HOCcomponent'

class ClickCounter extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.handleChange}>Click Me</button>
        <h2>You clicked {this.props.count} times</h2>
      </div>
    )
  }
}

export default HOCcomponent(ClickCounter);