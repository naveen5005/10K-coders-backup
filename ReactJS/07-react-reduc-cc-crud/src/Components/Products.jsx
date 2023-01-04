import React, { Component } from 'react'
import { connect } from "react-redux";
import { addProductAction } from '../Stores/actions';
import ProductsTable from './ProductsTable';
class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prodName: "",
            price: "",
            category: ""
        }
        console.log(props);
    }

    handleChange = (e) => {
        let newProduct = { ...this.state };
        newProduct[e.target.name] = e.target.value;
        this.setState(newProduct);
    }
    addProducts = () => {
        console.log(this.state);
        this.props.addProducts(this.state);
        this.clearProductForm();
    }
    clearProductForm = () => {
        this.setState({
            prodName: "",
            price: "",
            category: ""
        })
        console.log(this.state)
    }
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-4">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Product Name</label>
                                <input type="text" name='prodName' value={this.state.prodName} className="form-control" onChange={(e) => { this.handleChange(e) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Price</label>
                                <input type="number" name='price' value={this.state.price} className="form-control" onChange={(e) => { this.handleChange(e) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Category</label>
                                <input type="text" name='category' value={this.state.category} className="form-control" onChange={(e) => { this.handleChange(e) }} />
                            </div>
                            <button type="button" onClick={() => { this.addProducts() }} className="btn btn-primary">Add Person</button>
                        </form>
                    </div>
                    <div className="col-8">
                        <ProductsTable />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allProducts: state
    }
}
function mapDisptachToProps(dispatch) {
    return {
        addProducts: (product) => { dispatch(addProductAction(product)) }
    }
}
export default connect(mapStateToProps, mapDisptachToProps)(Products);
console.log(connect)