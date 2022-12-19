import axios from 'axios'
import React, { Component } from 'react'

export default class Recipies extends Component {

    constructor(props) {
        super(props)

        this.state = {
            UserDetailsChild: []
        }
    }

    deleteRecipie = (usr) => {
        
    }
    render() {
        return (

            <div>
                <div className="card p-5" style={{width: "18rem"}}>
                    <img src={this.props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.recipieDetails.title}</h5>
                        <p className="card-text">{this.props.summary}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}
