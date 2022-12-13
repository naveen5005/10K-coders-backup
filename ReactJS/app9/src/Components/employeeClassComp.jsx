import { Component } from "react";

class Employee extends Component {
    constructor() {
        super();
        this.state = {
            empDetails: {
                empName: "Naveen",
                empEmail: "naveenkumar@gmail.com",
                empRole: "Tester"
            },
            showEmployee: false
        }

        // this.showEmpInf = this.showEmpInf.bind(this);
    }

    // showEmpInf() {
    //     console.log("Employee details triggered...!!")
    // }/
    showEmpInf = () => {
        let newEmployee = {
            empName : "Kiran",
            empEmail : "kiran@gmail.com",
            empRole : "Developer"
        }
        let newEmployee2 ={...this.state.empDetails, empRole:"Developer"};
        this.setState({showEmployee:true,empDetails:newEmployee2})
        console.log("Employe details triggerred..!!!")
    }

    render() {
        return (
            <div>
                <h2>Welcome to Employee Component</h2>
                <button onClick={this.showEmpInf}>Show Employee Details</button>
                {/* {this.state.showEmployee && <p>{this.state.empDetails.empName}</p>} */}
                {this.state.showEmployee ? <div>
                    <p>{this.state.empDetails.empName}</p>
                    <p>{this.state.empDetails.empEmail}</p>
                    <p>{this.state.empDetails.empRole}</p>
                </div> : <p>Employee Details not avaiable....</p>}
            </div>
        );
    }
}

export default Employee;