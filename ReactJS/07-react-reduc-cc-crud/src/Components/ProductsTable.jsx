import React, { Component } from 'react'
import { connect} from 'react-redux'
import { deleteProductAction } from '../Stores/actions'
class ProductsTable extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <table className='table'>
            <thead className='table-dark'>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>EDIT PRODUCT</th>
                    <th>DELETE PRODUCT</th>
                </tr>
            </thead>
            <tbody>
                {this.props.allProducts.products.map((product,i)=>
                <tr key={i}>
                    <td>{product.prodName}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>
                        <button type='button' className='btn btn-warning'>EDIT</button>
                    </td>
                    <td>
                        <button type='button' onClick={()=>{this.props.deleteUser(product)}} className='btn btn-primary'>DELETE</button>
                    </td>
                </tr>)}
            </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state){
    return{
        allProducts : state
    }
}
function mapDisptachToProps(dispatch){
    return{
        deleteUser : (product)=>{dispatch(deleteProductAction(product))}
    }
}
export default connect(mapStateToProps,mapDisptachToProps)(ProductsTable);