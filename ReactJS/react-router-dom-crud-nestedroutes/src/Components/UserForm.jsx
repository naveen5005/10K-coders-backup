import React from 'react'

const UserForm = ({handleChange,user1,handleSubmit,btnName}) => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputFname" className="form-label">First Name</label>
                    <input type="text" name='fname' value={user1.fname} onChange={(e) => { handleChange(e) }} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputLname" className="form-label">Last Name</label>
                    <input type="text" name='lname' value={user1.lname} onChange={(e) => { handleChange(e) }} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputDOB" className="form-label">DOB</label>
                    <input type="date" name='dob' value={user1.dob} onChange={(e) => { handleChange(e) }} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                    <input type="email" name='email' value={user1.email} onChange={(e) => { handleChange(e) }} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhnumber" className="form-label">Phone Number</label>
                    <input type="number" name='phnum' value={user1.phnum} onChange={(e) => { handleChange(e) }} className="form-control" />
                </div>
                <button type="button" onClick={handleSubmit} className="btn btn-primary">{btnName}</button>
            </form>
        </div>
    )
}

export default UserForm
