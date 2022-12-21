import axios from 'axios'
import React, { Component } from 'react'

export default class UserThird extends Component {
    rcc
    constructor(props) {
        super(props)

        this.state = {
            universityDetails: {
                university: "",
                institute: "",
                branch: "",
                degree: "",
                status: "",
                avgCPI: "",
                experience: "",
                website: "",
                areasofInterest:[]
            },
            allUniversityDetails: [],
            editIndex: null
        }
    }

    handleChange = (e) => {
        // console.log(e)
        // console.log(e.target.value);
        var newUsers = { ...this.state.universityDetails };
        if (e.target.name === "branch") {
            e.target.childNodes.forEach((element, i) => {
                if (e.target.childNodes[i].selected) {
                    newUsers[e.target.name] = e.target.childNodes[i].text;
                }
            })
        }
        else if (e.target.name === "degree") {
            e.target.childNodes.forEach((element, i) => {
                if (e.target.childNodes[i].selected) {
                    newUsers[e.target.name] = e.target.childNodes[i].text;
                }
            })
        }
        else if(e.target.name === "areasofInterest"){
            console.log(e)
            var allcheckboxes = [...this.state.universityDetails.areasofInterest];
            console.log(allcheckboxes)
            if(allcheckboxes.length === 0){
                allcheckboxes.push(e.target.value);
            } else{
                let check = allcheckboxes.find((cb)=> cb == e.target.value);
                if(check){
                    allcheckboxes = allcheckboxes.filter((cb)=> cb !== e.target.value)
                } else{
                    allcheckboxes.push(e.target.value)
                }
            }
            newUsers["areasofInterest"] = allcheckboxes;
            // console.log(allcheckboxes)
            // this.setState({areasofInterest : allcheckboxes});
        }
        else {
            newUsers[e.target.name] = e.target.value
        }
        this.setState({ universityDetails: newUsers });
    }
    displayCode = () => {
        var newUser = [...this.state.allUniversityDetails];
        newUser.push(this.state.universityDetails);
        this.setState({ allUniversityDetails: newUser })
    }
    addUser = () => {
        axios({
            method: 'post',
            url: "http://localhost:3000/university",
            data: this.state.universityDetails,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        this.displayCode();
        this.clearForm();
    }
    deleteUser = (data) => {
        axios.delete("http://localhost:3000/university/" + data.id).then(() => {
            this.getAllUsers();
        })
    }
    editUser = (data, id) => {
        this.setState({ universityDetails: data, editIndex: id })
    }
    updateUser = () => {
        axios({
            method: 'PUT',
            url: 'http://localhost:3000/university/' + this.state.editIndex,
            data: this.state.universityDetails
        })
        this.displayCode();
        this.clearForm();
    }
    clearForm = () => {
        var userToBeCleared = {
            university: "",
            institute: "",
            branch: "",
            degree: "",
            status: "",
            avgCPI: "",
            experience: "",
            website: "",
            areasofInterest :[]
        }
        this.setState({universityDetails:userToBeCleared})
    }
    render() {
        return (
            <div>
                <h1>University Details</h1>
                <form action="">
                    <label htmlFor="">University</label>
                    <input type="text" name="university" value={this.state.universityDetails.university} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label htmlFor="">Institute</label>
                    <input type="text" name="institute" value={this.state.universityDetails.institute} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label htmlFor="">Branch</label>
                    <select name="branch" value={this.state.universityDetails.branch} onChange={(e) => { this.handleChange(e) }}>
                        <option value="">--select the branch--</option>
                        <option value={"ECE"}>ECE</option>
                        <option value={"CIVIL"}>CIVIL</option>
                        <option value={"MECH"}>MECH</option>
                        <option value={"CSE"}>CSE</option>
                    </select> <br />
                    <label htmlFor="">Degree</label>
                    <select name="degree" value={this.state.universityDetails.degree} onChange={(e) => { this.handleChange(e) }}>
                        <option value="">--select the degree--</option>
                        <option value={"B.Tech"}>B.Tech</option>
                        <option value={"Graduate"}>Graduate</option>
                        <option value={"Post Graduate"}>Post Graduate</option>
                        <option value={"Masters"}>Masters</option>
                    </select> <br />
                    <input type="radio" name="status" checked={this.state.universityDetails.status == "Pursuing"} value={"Pursuing"} onChange={(e) => { this.handleChange(e) }} />
                    <label htmlFor="">Pursuing</label> <br />
                    <input type="radio" name="status" checked={this.state.universityDetails.status == "Completed"} value={"Completed"} onChange={(e) => { this.handleChange(e) }} />
                    <label htmlFor="">Completed</label> <br />
                    <label htmlFor="">Average CPI</label>
                    <input type="number" name="avgCPI" value={this.state.universityDetails.avgCPI} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">Experience</label>
                    <input type="number" name="experience" value={this.state.universityDetails.experience} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">WebSite</label> 
                    <input type="url" name="website" value={this.state.universityDetails.website} onChange={(e) => { this.handleChange(e) }} /> <br /> <br />
                    <label htmlFor="">Area of Interest</label><br />
                    <input type="checkbox" name="areasofInterest" value={"Playing"} checked={this.state.universityDetails.areasofInterest.indexOf("Playing")>-1} onChange={(e) => { this.handleChange(e) }}/> Playing <br />
                    <input type="checkbox" name="areasofInterest" value={"Studying"} checked={this.state.universityDetails.areasofInterest.indexOf("Studying")>-1}  onChange={(e) => { this.handleChange(e) }}/> Studying <br />
                    <input type="checkbox" name="areasofInterest" value={"Music"} checked={this.state.universityDetails.areasofInterest.indexOf("Music")>-1} onChange={(e) => { this.handleChange(e) }}/> Music <br />
                    {this.state.editIndex != null ? <button type='button' className='btn btn-primary' onClick={this.updateUser}>Update User</button> :
                        <button type='button' className='btn btn-primary' onClick={this.addUser}>Add User</button>}
                </form>
                <br /><hr />
                <table className='table'>
                    <thead className='table-dark'>
                        <tr>
                            <th>ID</th>
                            <th>University</th>
                            <th>Institute</th>
                            <th>Branch</th>
                            <th>Degree</th>
                            <th>Status</th>
                            <th>AverageCPI</th>
                            <th>Experience</th>
                            <th>Website</th>
                            <th>Area of Interest</th>
                            <th>EDIt</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allUniversityDetails.map((data, i) => <tr key={i}>
                            <td>{i+1}</td>
                            <td>{data.university}</td>
                            <td>{data.institute}</td>
                            <td>{data.branch}</td>
                            <td>{data.degree}</td>
                            <td>{data.status}</td>
                            <td>{data.avgCPI}</td>
                            <td>{data.experience}</td>
                            <td>{data.website}</td>
                            <td>{data.areasofInterest}</td>
                            <td>
                                <button type='button' className='btn btn-warning' onClick={() => { this.editUser(data, i) }}>EDIT</button>
                            </td>
                            <td>
                                <button type='button' className='btn btn-danger' onClick={() => { this.deleteUser(data, i) }}>DELETE</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
    async componentDidMount() {
        let response = axios.get("http://localhost:3000/university").then((res) => {
            // console.log(res.data);
            this.setState({ allUniversityDetails: res.data });
        })
        // this.getAllUsers();
    }

    getAllUsers=()=>{
        let response = axios.get("http://localhost:3000/university").then((res) => {
            // console.log(res.data);
            this.setState({ allUniversityDetails: res.data });
        })
    }
}
