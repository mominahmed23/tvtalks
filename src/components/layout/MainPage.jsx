import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MyNav from './MyNav';
import mainBanner from "../../images/banner-v2.jpg";
import LoginBox from './LoginBox';
import CardsView from '../card/CardsView';
import smallLogo from "../../images/logo-v1.png";

export class MainPage extends Component {
    render() {
        
        return (
            <main>
                 <MyNav/>
                 <div className="main-banner mb-4 default-shadow" style={{backgroundImage: "url("+mainBanner+")"}}>
                     
                 </div>
                 <Container fluid>
                <Row>
                 <Col md={12} lg={9} xl={10} className="px-1">
                <CardsView/>
                 </Col>
                 <Col md={12} lg={3} xl={2} className="pr-0">
                 <div className="my-sidebar h-100">
                     <LoginBox/>
                 </div>
                 </Col>
                </Row>
               </Container>
               <footer>
                   <div className="d-flex align-items-center p-2">
                   <div className="logo-wrap">
                   <img src={smallLogo} width="25" className="img-fluid" alt="TVtalks"/>
                   </div>
                   <div className="text-center flex-grow-1 copyrights-text">
                   <small>&copy; Copyright 2020 TVtalks. All Rights Reserved</small>
                   </div>
                   </div>
                
               </footer>
            </main>
         
           
        )
    }
}

export default MainPage

