function deleteUsers(i){
    console.log("delete action triggered" ,i);
    users = users.filter((element,index)=>index !== i);
    console.log(users)
    localStorage.setItem("USERS",JSON.stringify(users));
    displayUsers(users)
}