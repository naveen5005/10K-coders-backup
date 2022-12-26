import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import UserForm from './UserForm'

const EditUser = () => {
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
    const updateUser =()=>{
        fetch("http://localhost:3001/users3/"+params.id,{
            method : "put",
            body : JSON.stringify(user3),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(()=>{
            navigate("/");
        })
    }
  return (
    <div>
      <h2>Welcome to Edit page</h2>
      <UserForm user3={user3} handleChange={handleChange} handleButton={updateUser} btnName ={"Update User"}/>
    </div>
  )
}

export default EditUser
