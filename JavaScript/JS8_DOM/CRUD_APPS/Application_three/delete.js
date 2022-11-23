function deleteUsers(i){
    console.log("delete action triggered...!!!",i)
    users=users.filter((element,index)=>index !==i)
    localStorage.setItem("USERS",JSON.stringify(users))
    displayData(users);
}
