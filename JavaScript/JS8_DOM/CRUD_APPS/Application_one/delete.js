function deleteUsers(i){
    console.log("Delete action triggered....",i)
    console.log(users)
    users = users.filter((element,index)=>i!==index)
    localStorage.setItem("userDetails",JSON.stringify(users))
    
    displayUserData(users);
}
