import React from 'react';
import './App.css';
import './styling/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {data} from "./tvshowsData";


function App() {
  console.log(data);
  return (
    <Container className="test">
      <h1 className="text-center">TVtalks Project</h1>
      <p className="text-center">By Zaeem & Momin</p>
      <h4 className="text-center">will start soon</h4>
    </Container>  
  
  );
}

export default App;
