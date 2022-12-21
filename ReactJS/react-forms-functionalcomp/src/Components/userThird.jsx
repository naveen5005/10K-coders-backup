import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function UserThird() {

    const [user3, setUser3] = useState({
        uname: "",
        pwd: "",
        email: "",
        presentGender: "",
        interestedGender: "",
        year: "",
        month: "",
        date: ""
    })
    const [user, setUser] = useState([]);
    const [isEdit,setIsEdit] = useState(false);
    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = () => {
        axios.get("http://localhost:3001/users3").then((response) => {
            // console.log(response.data);
            setUser(response.data);
        })
    }
    const handleChange = (e) => {
        // console.log(e)
        var newUser = { ...user3 };
        newUser[e.target.name] = e.target.value;
        setUser3(newUser);
    }
    const addUser = () => {
        // console.log(user3);
        axios.post("http://localhost:3001/users3", user3).then(() => {
            getAllUsers();
            clearForm();
        })
    }
    const deleteUser = (user) => {
        axios.delete("http://localhost:3001/users3/" + user.id).then(() => {
            getAllUsers();
        })
    }
    const editUser=(user)=>{
        setUser3(user);
        setIsEdit(true)
    }
    const updateUser =()=>{
        axios.put("http://localhost:3001/users3/"+user3.id,user3).then(()=>{
            getAllUsers();
            setIsEdit(false);
            clearForm();
        })
    }
    const clearForm = () => {
        setUser3({
            uname: "",
            pwd: "",
            email: "",
            presentGender: "",
            interestedGender: "",
            year: "",
            month: "",
            date: ""
        })
    }
    return (
        <div className='container'>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputUsername" className="form-label">Username</label>
                    <input type="text" className="form-control" name="uname" value={user3.uname} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputUsername" className="form-label">Password</label>
                    <input type="password" name="pwd" className="form-control" value={user3.pwd} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email Address</label>
                    <input type="email" className="form-control" name="email" value={user3.email} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Present Gender</label> <br />
                    <select className="form-control" name="presentGender" value={user3.presentGender} onChange={(e) => { handleChange(e) }} >
                        <option value="--select any one option--">--select any one option--</option>
                        <option value="I am a man">I am a man</option>
                        <option value="I am a woman">I am a woman</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Interested Gender</label> <br />
                    <select className="form-control" name="interestedGender" value={user3.interestedGender} onChange={(e) => { handleChange(e) }} >
                        <option value="--select any one option--">--select any one option--</option>
                        <option value="I want to find man">I want to find man</option>
                        <option value="I want to find woman">I want to find woman</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Date Of Birth</label> <br />
                    <select name="year" value={user3.year} onChange={(e) => { handleChange(e) }} >
                        <option value="--select any one option--">year</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                    </select>
                    <select name="month" value={user3.month} onChange={(e) => { handleChange(e) }} >
                        <option value="month">month</option>
                        <option value="Jan">Jan</option>
                        <option value="Feb">Feb</option>
                        <option value="Mar">Mar</option>
                        <option value="Apr">Apr</option>
                        <option value="May">May</option>
                        <option value="Jun">Jun</option>
                        <option value="Jul">Jul</option>
                        <option value="Aug">Aug</option>
                        <option value="Sep">Sep</option>
                        <option value="Oct">Oct</option>
                        <option value="Nov">Nov</option>
                        <option value="Dec">Dec</option>
                    </select>
                    <select name="date" value={user3.date} onChange={(e) => { handleChange(e) }} >
                        <option value="">Date</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                </div>
                {isEdit ?<button type="button" onClick={updateUser} className="btn btn-primary">Update User</button> :
                <button type="button" onClick={addUser} className="btn btn-primary">Add User</button>}
            </form> <hr />

            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th>Id</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email Address</th>
                        <th>Present Gender</th>
                        <th>Interested Gender</th>
                        <th>Date Of Birth</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((data, i) => <tr key={i}>
                        <td>{data.id}</td>
                        <td>{data.uname}</td>
                        <td>{data.pwd}</td>
                        <td>{data.email}</td>
                        <td>{data.presentGender}</td>
                        <td>{data.interestedGender}</td>
                        <td>{data.year}-{data.month}-{data.date}</td>
                        <td>
                            <button type='button' onClick={()=>{editUser(data)}} className='btn btn-warning'>EDIT</button>
                        </td>
                        <td>
                            <button type='button' onClick={() => { deleteUser(data) }} className='btn btn-danger'>DELETE</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
