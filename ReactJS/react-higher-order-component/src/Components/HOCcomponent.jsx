import React from 'react'
import { Component } from 'react'

const HOCcomponent = (OriginalComponent) => {

 class sampleComponent extends Component{
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    handleChange = () =>{
        this.setState({count : this.state.count + 1})
    }
    render(){
        return <OriginalComponent count = {this.state.count} handleChange = {this.handleChange}/>
    }
 }
  return sampleComponent;
}

export default HOCcomponent
