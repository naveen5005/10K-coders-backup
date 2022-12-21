import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UserSecond = () => {
    const [user2, setUser2] = useState({
        university: "",
        institute: "",
        branch: "",
        degree: "",
        status: "",
        areasofInterest: [],
        avgCPI: "",
        experience: "",
        website: ""
    })
    const [users, setUser] = useState([]);
    const [isEdit, setIsEditUser] = useState(false);
    useEffect(() => {
        getAllUsers();
    }, [])
    const getAllUsers = () => {
        axios.get("http://localhost:3001/users2").then((response) => {
            // console.log(response)
            setUser(response.data)
        })
    }
    // console.log(users)
    const addUser = () => {
        axios.post("http://localhost:3001/users2", user2).then(() => {
            getAllUsers();
            clearForm();
        })
    }
    const handleChange = (e) => {
        // console.log(e.target.value, e.target.name, e)
        var newUser = { ...user2 };
        if (e.target.name === "branch" || e.target.name === "degree") {
            // console.log(e.target.value)
            newUser[e.target.name] = e.target.value
        }
        else if (e.target.name == "areasofInterest") {
            var allcheckboxes = [...newUser.areasofInterest];
            if (allcheckboxes.length === 0) {
                allcheckboxes.push(e.target.value)
            } else {
                let check = allcheckboxes.find((element) => element == e.target.value)
                if (check) {
                    allcheckboxes = allcheckboxes.filter((element) => element !== e.target.value)
                } else {
                    allcheckboxes.push(e.target.value);
                }
            }
            newUser["areasofInterest"] = allcheckboxes;
            // console.log(allcheckboxes);
        }
        else {
            newUser[e.target.name] = e.target.value;
        }
        setUser2(newUser);
    }
    const deleteUser = (user) => {
        // console.log(user)
        axios.delete("http://localhost:3001/users2/" + user.id).then(() => {
            getAllUsers();
        })
    }
    const editUser = (user) => {
        setUser2(user);
        setIsEditUser(true)
    }
    const updateUser = () => {
        axios.put("http://localhost:3001/users2/" + user2.id, user2).then(() => {
            getAllUsers();
            setIsEditUser(false);
            clearForm();
        })
    }
    const clearForm = () => {
        setUser2({
            university: "",
            institute: "",
            branch: "",
            degree: "",
            status: "",
            areasofInterest: [],
            avgCPI: "",
            experience: "",
            website: ""
        })
    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputUniversity" className="form-label">University</label>
                    <input type="text" className="form-control" name='university' value={user2.university} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputInsitute" className="form-label">Institute</label>
                    <input type="text" className="form-control" name='institute' value={user2.institute} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputBranch" className="form-label">Branch</label>
                    <select name="branch" value={user2.branch} onChange={(e) => { handleChange(e) }}>
                        <option value={"--select any branch--"}>--select any branch--</option>
                        <option value={"ECE"}>ECE</option>
                        <option value={"MECH"}>MECH</option>
                        <option value={"CSE"}>CSE</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputDegree" className="form-label">Degree</label>
                    <select name="degree" value={user2.degree} onChange={(e) => { handleChange(e) }}>
                        <option value={"--select any branch--"}>--select any degree--</option>
                        <option value={"Bachelor's Degree"}>Bachelor's Degree</option>
                        <option value={"Master's Degree"}>Master's Degree</option>
                        <option value={"Doctorate (PhD)"}>Doctorate (PhD)</option>
                    </select>
                </div> <br />

                <label htmlFor=""><h2>Status</h2></label>
                <div className="form-check">
                    <input className="form-check-input" checked={user2.status == "Completed"} value={"Completed"} onChange={(e) => { handleChange(e) }} type="radio" name="status" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Completed
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" checked={user2.status == "Pursuing"} value={"Pursuing"} onChange={(e) => { handleChange(e) }} type="radio" name="status" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Pursuing
                    </label>
                </div>

                <label htmlFor=""><h2>Areas of Interest</h2></label>
                <div className="form-check">
                    <input className="form-check-input" name='areasofInterest' type="checkbox" checked={user2.areasofInterest.indexOf("Singing") > -1} onChange={(e) => { handleChange(e) }} value={"Singing"} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Singing
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" name='areasofInterest' type="checkbox" checked={user2.areasofInterest.indexOf("Outdoor games") > -1} onChange={(e) => { handleChange(e) }} value={"Outdoor games"} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Outdoor games
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" name='areasofInterest' type="checkbox" checked={user2.areasofInterest.indexOf("Coding") > -1} onChange={(e) => { handleChange(e) }} value={"Coding"} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Coding
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" name='areasofInterest' type="checkbox" checked={user2.areasofInterest.indexOf("Reading") > -1} onChange={(e) => { handleChange(e) }} value={"Reading"} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Reading
                    </label>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputAverageCPI" className="form-label"><h2>AverageCPI</h2></label>
                    <input type="number" className="form-control" name='avgCPI' value={user2.avgCPI} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputExperience" className="form-label"><h2>Experience</h2></label>
                    <input type="number" className="form-control" name='experience' value={user2.experience} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputExperience" className="form-label"><h2>WebSite</h2></label>
                    <input type="url" className="form-control" name='website' value={user2.website} onChange={(e) => { handleChange(e) }} />
                </div>

                {isEdit ? <button type="button" onClick={updateUser} className="btn btn-primary">update User</button> :
                    <button type="button" onClick={addUser} className="btn btn-primary">Add User</button>}
            </form> <hr />
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th>ID</th>
                        <th>University</th>
                        <th>Institute</th>
                        <th>Branch</th>
                        <th>Degree</th>
                        <th>Status</th>
                        <th>Interests</th>
                        <th>Average CPI</th>
                        <th>Experience</th>
                        <th>WebSite</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((data, i) => <tr key={i}>
                        {/* {console.log(data)} */}
                        <td>{data.id}</td>
                        <td>{data.university}</td>
                        <td>{data.institute}</td>
                        <td>{data.branch}</td>
                        <td>{data.degree}</td>
                        <td>{data.status}</td>
                        <td>{data.areasofInterest}</td>
                        <td>{data.avgCPI}</td>
                        <td>{data.experience}</td>
                        <td>{data.website}</td>
                        <td>
                            <button type='button' onClick={() => { editUser(data) }} className='btn btn-warning'>EDIT</button>
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

export default UserSecond
