// var userData = {
//     university: "",
//     institute: "",
//     branch: "",
//     degree: "",
//     status: "",
//     avgCPI: "",
//     semesterNumber: "",
//     experience: "",
//     website: ""
// }
// var users=[];
// function addValues() {
//     document.querySelector("tbody").innerHTML=""
//     for (a in userData) {
//         if (a == "branch") {
//             var branchDetails = document.getElementById(a).children
//             // console.log(branchDetails)
//             for (i = 0; i < branchDetails.length; i++) {
//                 if (branchDetails[i].selected) {
//                     userData[a] = branchDetails[i].value
//                 }
//             }
//         }
//         else if (a == "degree") {
//             var degreeDetails = document.getElementById(a).children
//             // console.log(degreeDetails)
//             for (i = 0; i < degreeDetails.length; i++) {
//                 if (degreeDetails[i].selected) {
//                     userData[a] = degreeDetails[i].value;
//                 }
//             }
//         }
//         else if (a == "status") {
//             var radioStatus = document.getElementsByName(a);
//             // console.log(radioStatus)
//             radioStatus.forEach((element) => {
//                 if (element.checked) {
//                     userData[a] = element.value;
//                 }
//             })
//         }
//         else {
//             userData[a] = document.getElementById(a).value
//         }
//         // users.push(userData);
//         // displayUserData(users);
//     }
//     console.log(userData)
//     users.push(userData);
//     displayUserData(users);
//     console.log(users);
//     clearForm();
// }

// function clearForm(){
//     for(a in userData){
//         if(a =="degree" && a =="branch"){
//             document.getElementById(a).value="";
//         }
//         else 
//         if(a == "status"){
//             var rb = document.getElementsByName(a);
//             rb.forEach((element)=>{
//                 element.checked =false
//             })
//         }
//         else{
//             document.getElementById(a).value="";
//         }

//     }
// }

var data = {
    university: "",
    institute: "",
    branch: "",
    degree: "",
    status: "",
    avgCPI: "",
    semesterNumber: "",
    experience: "",
    website: ""
}
var users = JSON.parse(localStorage.getItem("userDetails"));
// console.log(users)
if(users == null){
    users=[];
}

var gIndex = 0;
// console.log(users)
// var users=[];
function addValues() {
    var dataPrint = readUserFromForm();
    users.push(dataPrint);

    // storing all the users in local storage
    localStorage.setItem("userDetails",JSON.stringify(users));  


    // console.log(dataPrint)
    // console.log(users)
    displayUserData(users);
    clearForm(users);
}

function clearForm(users){
    users.forEach((element)=>{
        for(a in element){
            if(a!=="status" && a!=="degree" && a!=="branch" && a!=="website"){
                document.getElementById(a).value="";
            }
            else if(a =="status"){
                var statusClearDetails = document.getElementsByName(a);
                // console.log(statusClearDetails)
                statusClearDetails.forEach((element)=>{
                    if(element.checked){
                        element.checked=false
                    }
                })
            }
            else if(a =="degree"){
                var degreeClearDetails = document.getElementById(a).children;
                // console.log(degreeClearDetails)
                for(i=0;i<degreeClearDetails.length;i++){
                    if(degreeClearDetails[i].selected){
                        degreeClearDetails[i].selected = false
                    }
                }
            }
            else if(a=="branch"){
                var branchClearDetails = document.getElementById(a).children;
                for(i=0;i<branchClearDetails.length;i++){
                    if(branchClearDetails[i].selected){
                        branchClearDetails[i].selected = false
                    }
                }
            }
            else if(a=="website"){
                document.getElementById(a).value="https://"
            }
        }
    })
}

function readUserFromForm(){
    var dataPrint = {...data}
    for (a in dataPrint) {
        if (a != "status" && a !== "branch" && a !== "degree") {
            dataPrint[a] = document.getElementById(a).value;
        }
        else if (a == "status") {
            var statusDetails = document.getElementsByName(a);
            statusDetails.forEach((element) => {
                if (element.checked) {
                    dataPrint[a] = element.value
                    // console.log(element.value)
                }
            })
            // console.log(statusDetails)
        }
        else if (a == "branch") {
            var branchDetails = document.getElementById(a).children;
            // console.log(branchDetails);
            for (i = 0; i < branchDetails.length; i++) {
                if(branchDetails[i].selected){
                    dataPrint[a] = branchDetails[i].value;
                }
            }
        }
        else if (a == "degree") {
            var degreeDetails = document.getElementById(a).children;
            // console.log(degreeDetails)
            for(i=0;i<degreeDetails.length;i++){
                if(degreeDetails[i].selected){
                    dataPrint[a] = degreeDetails[i].value;
                }
            }
        }
    }

    return dataPrint;
}






