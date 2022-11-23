function editUsers(i){
    globalVar = i
    console.log("edit action triggered...!!!",i)
    var newUsers = users[i];
    console.log(users[i])
    for(a in newUsers){
        document.getElementById(a).value = newUsers[a];
    }

    document.getElementById("updateBtn").style.display = "inline-block";
    document.getElementById("addBtn").style.display = "none"
}

function updateUser(){
    var user = readFromFOM();
    users[globalVar] = user;
    localStorage.setItem("USERS",JSON.stringify(users));
    displayData(users)

    document.getElementById("updateBtn").style.display = "none";
    document.getElementById("addBtn").style.display = "inline-block"
    clearForm(users)
}