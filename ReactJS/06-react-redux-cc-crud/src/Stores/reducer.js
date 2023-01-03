import { ADD_PERSON, DELETLE_PERSON } from "./actionTypes";

const defaultState={
    persons :[
        {fname :"Naveen",lname:"Kumar",email:"naveen@gmail.com"},
        {fname :"Ram",lname:"Kumar",email:"ram@gmail.com"},
        {fname :"Krishna",lname:"Kumar",email:"krishna@gmail.com"},
    ]
}

export const reducer =(state = defaultState,action) =>{
    switch (action.type) {
        case ADD_PERSON:
            let newPerson =[...state];
            newPerson.push(action.payload);
            return newPerson; 
        case DELETLE_PERSON:
            let updatedPersons = state.filter((person)=> person.email !== action.payload.email)
            
            //filter((person)=> person.email !== action.payload.email);
            return updatedPersons;
        default:
            return state.persons;
    }
}