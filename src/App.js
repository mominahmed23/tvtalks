import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styling/main.scss';
import {data} from "./tvshowsData";
import MainPage from './components/layout/MainPage';


function App() {
  console.log(data);
  return (
      <MainPage/>
  );
}

export default App;
