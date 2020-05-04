import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MyNav from './MyNav';
import mainBanner from "../../images/banner-v2.jpg";
import LoginBox from './LoginBox';
import CardsView from '../card/CardsView';
import smallLogo from "../../images/logo-v2.png";

export class MainPage extends Component {
    render() {
        
        return (
            <main>
                 <MyNav/>
                 <div className="main-banner mb-3 default-shadow" style={{backgroundImage: "url("+mainBanner+")"}}>
                     {/* <div className="banner-title w-25 mx-auto mt-3" style={{backgroundColor:"black", color:"white" }}>Shows You Love</div> */}
                 </div>
                 <Container className="pb-3">
                <Row>
                 <Col md={12} lg={9} xl={9} className="order-2 order-lg-1">
                <CardsView/>
                 </Col>
                 <Col md={12} lg={3} xl={3} className="mt-sm-4 mt-md-0 mb-4 mb-lg-0 order-1 order-lg-2">
                 <div className="my-sidebar default-shadow">
                    <LoginBox/>
                 </div>
                 </Col>
                </Row>
               </Container>
               <footer>
                   <div className="d-flex align-items-center p-2">
                   <div className="logo-wrap">
                   <img src={smallLogo} width="40" className="img-fluid" alt="TVtalks"/>
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

