export const addUserAction = () =>{
    return{
      type : "ADDUSERS",
      paload : "Venky"
    }
  }
  export const deleteUserAction =(user)=>{
    return{
      type : "DELETEUSER",
      paload : user
    }
  }