import React, { Component } from 'react'
import axios from "axios";
import Recipies from './Recipies';



export default class Users extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipies: []
    }
  }

  render() {
    return (
      <div className='d-flex container'>
        {/* // <div>  */}
        
        {this.state.recipies.map((usr, i) => <Recipies key={i} {...usr} recipieDetails={usr} />)}
      </div>
    )
  }
  async componentDidMount() {
    //  let responseDetails = axios.get("https://api.spoonacular.com/recipes/random?apiKey=c65ec040ee9c4917a059d882690bc6a0&number=10");
    let responseDetails = await axios.get("http://localhost:3000/recipes");
    this.setState({ recipies: responseDetails.data });
    // <Recipies {...this.state.recipies}/>
    console.log(this.state.recipies)
  }
}
