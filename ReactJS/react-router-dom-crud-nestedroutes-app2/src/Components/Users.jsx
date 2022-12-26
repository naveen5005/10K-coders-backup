import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import User from './User';

const Users = () => {
    const[user2,setUser2] = useState([]);
    useEffect(()=>{
        getAllUsers();
    },[])
    const getAllUsers = async ()=>{
        const response = await (await fetch("http://localhost:3001/users2")).json();
        // console.log(response);
        setUser2(response);
    }
    return (
        <div>
            <table className="table">
                <thead className='table-dark'>
                    <tr>
                        <th>university</th>
                        <th>institute</th>
                        <th>branch</th>
                        <th>degree</th>
                        <th>status</th>
                        <th>areasofInterest</th>
                        <th>avgCPI</th>
                        <th>experience</th>
                        <th>website</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {user2.map((data,i)=><User myUser ={data} key={i}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Users
