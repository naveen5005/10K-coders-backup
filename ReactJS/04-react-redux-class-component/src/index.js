import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore } from "redux";
const root = ReactDOM.createRoot(document.getElementById('root'));

const defaultState ={
  users:["cars","bikes","aeroplanes","ships"]
}
export const addUserAction = ()=>{
  return{
    type : "ADDUSER",
    paload:"JCB"
  }
}
export const deleteUserAction = (user) =>{
  return{
    type : "DELETEUSER",
    paload : user
  }
}
const reducer =(state = defaultState,action)=>{
    switch (action.type) {
      case "ADDUSER":
        let newUser =[...state.users];
        newUser.push(action.paload);
        return {...state,users:newUser}
      case "DELETEUSER":
        let updatedUsers = state.users.filter((user)=>user !== action.paload);
        return {...state,users:updatedUsers}
      default:
        return state;
    }
}
const store = createStore(reducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
