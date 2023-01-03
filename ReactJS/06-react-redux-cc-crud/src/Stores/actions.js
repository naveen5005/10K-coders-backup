export const addPersonAction =(person)=>{
    return{
        type : "ADDPERSON",
        payload : person
    }
}
export const deletePersonAction = (person) =>{
    return{
        type :"DELETEPERSON",
        payload : person
    }
}