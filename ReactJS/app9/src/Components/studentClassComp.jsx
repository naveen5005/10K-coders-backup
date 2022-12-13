import { Component } from "react";

export default class Student extends Component {
    constructor() {
        super();
        this.state = {
            showMessage: true,
            showImages: false,
            message: "Welcome to ReactJs sessions!!!",
            studentDetails: {
                fname: "naveen",
                lname: "Kumar",
                email: "naveenkumar@gmail.com"
            },
            subjects: ["HTML", "CSS", "JS", "ReactJS"],
            images: [
                "https://cdn-icons-png.flaticon.com/512/888/888859.png",
                "https://cdn-icons-png.flaticon.com/512/888/888859.png",
                "https://www.singaporecodingclub.com/wp-content/uploads/2022/05/Unofficial_JavaScript_logo_2.svg_.png",
                "https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/01/pasted-image-0-2.png"
            ]
        }
    }
    render() {
        return <div>
            {this.state.showMessage && <h2>{this.state.message}</h2>}
            <hr />
            <ul>
                {Object.values(this.state.studentDetails).map((val, i) => {
                    return <li key={i}>{val}</li>
                })}
            </ul> <hr />
            <ul>
                {this.state.subjects.map((val, i) => {
                    return <li key={i}>{val}</li>
                })}
            </ul> <hr />
            {/* Ternory operator */}
            <div>
                {/*single condition based rendoring */}
                {this.state.showImages && this.state.images.map((val, i) => {
                    return <img key={i} src={val} alt="" style={{ width: 100, height: 100 }} />
                })} <hr />
                {/* double condition rendering */}
                {this.state.showImages ? this.state.images.map((val, i) => <img key={i} src={val} alt="" style={{ width: 100, height: 100 }} />) : <p>There are no images avaiable..</p>}
            </div>

        </div>
    }
}