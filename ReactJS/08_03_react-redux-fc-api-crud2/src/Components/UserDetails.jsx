import React from 'react'

const UserDetails = ({ userData,deleteUser,editUser }) => {
    return (
        <>
            {/* {console.log(userData)} */}
            {userData.map((data, i) =>
                <tr key={i}>
                    <td>{data.fname}</td>
                    <td>{data.lname}</td>
                    <td>{data.email}</td>
                    <td>
                        <button type='button' className='btn btn-warning' onClick={()=>{editUser(data)}}>Edit</button>
                    </td>
                    <td>
                        <button type='button' className='btn btn-danger' onClick={()=>{deleteUser(data)}}>Delete</button>
                    </td>
                </tr>)}
        </>
    )
}

export default UserDetails
