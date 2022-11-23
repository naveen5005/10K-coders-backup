var data={
    fname:"",
    lname:"",
    dob:"",
    email:"",
    mnumber:""
}

var globalVar = 0;
var users = JSON.parse(localStorage.getItem("USERS"));
console.log(users)
if(users == null){
    users=[];
}
// var users=[];
function readData(){
    var user=readFromFOM();
    users.push(user);
    localStorage.setItem("USERS",JSON.stringify(users));
    console.log(users);
    displayData(users);
    clearForm(users)
}

function clearForm(users){
    users.forEach((element)=>{
        for(a in element){
            document.getElementById(a).value=""
        }
    })
}

function readFromFOM(){
    var dataPrint ={...data}
    for(a in dataPrint){
        dataPrint[a] = document.getElementById(a).value;
    }
    return dataPrint;
}