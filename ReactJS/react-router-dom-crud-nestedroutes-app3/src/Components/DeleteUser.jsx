import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import UserForm from './UserForm';

const DeleteUser = () => {
    const[user3,setUser3]=useState({
        uname : "",
        pwd : "",
        email : "",
        presentGender : "",
        interestedGender : "",
        year : "",
        month : "",
        date : ""
    });
    const navigate = useNavigate();
    const params = useParams();
    // console.log(params);
    useEffect(() => {
        fetch("http://localhost:3001/users3/" + params.id).then((response) => response.json())
        .then((data) => {
          setUser3(data);
        })
      },[])
    const handleChange = (e)=>{
        var newUser ={...user3}
        newUser[e.target.name] = e.target.value;
        setUser3(newUser);
    }
    const DeleteUser = ()=>{
        fetch("http://localhost:3001/users3/"+params.id,{
            method:'delete'
        }).then(()=>{
            navigate("/")
        })
    }
  return (
    <div>
      {/* <h2>Welcome to Delete User Page</h2> */}
      <UserForm user3={user3} handleChange ={handleChange} handleButton ={DeleteUser} btnName ={"Delete User"}/>
    </div>
  )
}

export default DeleteUser
