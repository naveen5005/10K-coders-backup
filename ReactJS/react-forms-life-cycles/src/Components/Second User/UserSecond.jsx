import axios from 'axios'
import React, { Component } from 'react'

export default class UserSecond extends Component {
    constructor(props) {
        super(props)

        this.state = {
            User: {
                id: "",
                title: "",
                price: "",
                description: "",
                category: "",
                image: "",
                rating: {
                    rate: "",
                    count: ""
                }
            },
            allUsers: [],
            editIndex: null
        }
    }

    changeHandle =(e)=>{
        var newUser ={...this.state.User}
        newUser[e.target.name] = e.target.value
        this.setState({User:newUser})
        // console.log(e.target.name)
    }
    deleteUser =(user,i)=>{
        // console.log(i)
        // console.log(user);
        var number =i+1;
        axios.delete("http://localhost:3002/users2/"+number).then((res)=>{
            this.componentDidMount();
        })
    }
    clearForm() {
        var newUserClear = {
            id: "",
            title: "",
            price: "",
            description: "",
            category: "",
            image: "",
            rating: {
                rate: "",
                count: ""
            }
        }
        this.setState({ User: newUserClear });
    }
    addUser =()=>{
        axios({
            method :'post',
            url :"http://localhost:3002/users2/",
            data : this.state.User,
            headers :{
                'Content-Type' : 'application/json'
            }
        })
        var newUsers = [...this.state.allUsers]
        newUsers.push(this.state.User);
        this.setState({allUsers:newUsers})
        this.clearForm();
    }
    editUser =(user,i)=>{
        this.setState({User:user, editIndex:i})
    }
    updateUser = ()=>{
        var number = this.state.editIndex+1;
        axios({
            method:"PUT",
            url :"http://localhost:3002/users2/"+number,
            data: this.state.User,
        })

        var newUsers = [...this.state.allUsers]
        newUsers[this.state.editIndex]=this.state.User;
        this.setState({allUsers:newUsers,editIndex:null})
        this.clearForm();
    }
    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="">ID</label>
                    <input type="text" name="id" disabled/><br />
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" value={this.state.User.title} onChange ={(e)=>{this.changeHandle(e)}}/> <br />
                    <label htmlFor="">Price</label>
                    <input type="text" name="price" value={this.state.User.price} onChange ={(e)=>{this.changeHandle(e)}}/> <br />
                    <label htmlFor="">Description</label>
                    <input type="text" name="description" value={this.state.User.description} onChange ={(e)=>{this.changeHandle(e)}}/> <br />
                    <label htmlFor="">Category</label>
                    <input type="text" name="category" value={this.state.User.category} onChange ={(e)=>{this.changeHandle(e)}}/> <br />
                    <label htmlFor="">Image</label>
                    <input type="url" name="image" value={this.state.User.image} onChange ={(e)=>{this.changeHandle(e)}}/> <br />
                    <label htmlFor="">Rate</label>
                    <input type="text" name="rate" value={this.state.User.rating.rate} onChange ={(e)=>{this.changeHandle(e)}}/> <br />
                    <label htmlFor="">Count</label>
                    <input type="text" name="count" value={this.state.User.rating.count} onChange ={(e)=>{this.changeHandle(e)}}/> <br /> <br />
                    {this.state.editIndex != null ?
                    <button type='button' className='btn btn-primary' onClick={this.updateUser}>Update User</button> :
                    <button type='button' className='btn btn-primary' onClick={this.addUser}>Add User</button>}

                    <br /> <hr />

                    <table className='table'>
                        <thead className='table-dark'>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Image</th>
                                <th>Rate</th>
                                <th>Count</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.allUsers.map((data,i) =>
                                <tr key={i}>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td>{data.price}</td>
                                    <td>{data.description}</td>
                                    <td>{data.category}</td>
                                    <td>
                                        <img src={data.image} style={{width:"100px",height:"100px"}} alt="" />
                                    </td>
                                    <td>{data.rating.rate}</td>
                                    <td>{data.rating.count}</td>
                                    <td>
                                        <button type='button' className='btn btn-warning' onClick={()=>{this.editUser(data,i)}}>EDIT</button>
                                    </td>
                                    <td>
                                        <button type='button' className='btn btn-danger' onClick={()=>{this.deleteUser(data,i)}}>DELETE</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
    async componentDidMount() {
        let response = await axios.get("http://localhost:3002/users2");
        // console.log(response.data)
        this.setState({ allUsers: response.data })
    }
}
