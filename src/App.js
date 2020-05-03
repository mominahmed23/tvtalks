import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styling/main.scss';
import {data} from "./tvshowsData";
import MainPage from './components/layout/MainPage';
import LoginForm from './components/layout/LoginForm'


function App() {
  console.log(data);
  return (
      //<MainPage/>
      <LoginForm/>
 );
}

export default App;
