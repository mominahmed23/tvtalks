import React, { useState, useReducer } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styling/main.scss';
import MainPage from './components/layout/MainPage';

export const LoginContext = React.createContext();

let isLoggedIn = false;
let token = localStorage.getItem("token");
let name = localStorage.getItem("name");
if(token === null){
  isLoggedIn = false;
}else{
  isLoggedIn = true;
}

const initialState = {
  isLoggedIn:isLoggedIn,
  name: isLoggedIn ? (name) :'',
  tvShows:[]
};

const reducer = (state, action) =>{
  switch(action.type){
    case "LOGGED_IN":
      return{...state, isLoggedIn: true, name:action.payload};
    case "LOGGED_OUT":
      return{...state, isLoggedIn: false, name:''};
      case "GET_TV_SHOWS":
      return{ ...state, tvShows:action.payload};
    default:
      return state;
  }
};

function App() {

  const [loginStatus, setLoginStatus] = useReducer(reducer, initialState);
  
  return (
    <LoginContext.Provider value={{loginStatus: loginStatus, setLoginStatus: setLoginStatus}}>
      <MainPage/>
    </LoginContext.Provider>
      
 );
}

export default App;
