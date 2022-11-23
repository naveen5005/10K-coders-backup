var data = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    message: ""
}

var gIndex = 0;
var users = JSON.parse(localStorage.getItem("USERS"));
if(users===null){
    users=[];
}
// console.log(users)
// var users =[];
function readData(){
    var user=readUserFromFOM();
    users.push(user);

    // storing the data in local
    localStorage.setItem("USERS",JSON.stringify(users));

    console.log(users);
    clearForm(user);
    displayUsers(users);
}



// var users = JSON.parse(localStorage.getItem("USERS"));
// if(users == null){
//     users=[];
// }
// var users=[];
// function readData() {
//     for (a in data) {
//         // console.log(a)
//         data[a] = document.getElementById(a).value;
//         // console.log(data[a])
//     }
//     // console.log(data)

//     users.push(data)
//     // console.log(users);

//     localStorage.setItem("USERS",JSON.stringify(users))
//     displayUsers(users);
//     clearForm(users);
// }

function clearForm(user) {
    for (b in user) {
        document.getElementById(b).value = "";
    }
}

function readUserFromFOM(){
    var dataPrint = {...data}
    for(a in dataPrint){
        dataPrint[a]=document.getElementById(a).value;
    }
    return dataPrint;
}
