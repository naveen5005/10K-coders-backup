import React, { Component } from 'react'
import HOCcomponent from './HOCcomponent'

class HoverCounter extends Component {

    render() {
        return (
            <div>
                <h2 onMouseOver={this.props.handleChange}>Hover on me</h2>
                <p>You hovered {this.props.count} times</p>
            </div>
        )
    }
}

export default HOCcomponent(HoverCounter);
