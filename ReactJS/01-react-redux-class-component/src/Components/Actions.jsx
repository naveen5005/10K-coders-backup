// Actions
//Each action should return an object
export const addUserAction = () =>{
    return{
      type : "ADD_USER",
      paload : "Naveen"
    }
  }
  export const deleteUserAction = (user) =>{
    return{
      type : "DELETE_USER",
      paload : user
    }
  }