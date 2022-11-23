function editUser(i){
    var newUser = users[i];
    gIndex=i
    for(a in newUser){
        document.getElementById(a).value=newUser[a];
    }
    console.log("Edit action triggered ...!!",i)
}


function updateData(i){
    var user = readUserFromFOM();
    users[gIndex] = user;
    localStorage.setItem("USERS",JSON.stringify(users));
    console.log("update action triggered...!")
    displayUsers(users);
}