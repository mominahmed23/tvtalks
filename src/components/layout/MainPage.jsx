import React, { useState, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MyNav from './MyNav';
import mainBanner from "../../images/banner-v3.JPG";
import LoginBox from './LoginBox';
import CardsView from '../card/CardsView';
import smallLogo from "../../images/logo-v2.png";
import kof from "../../images/kof.gif";
import kof2 from "../../images/fof2.gif";
import { LoginContext } from '../../App';
import SignupBox from './SignupBox';

function MainPage() {
    const loginContext = useContext(LoginContext);
        return (
            <main>
            <MyNav/>
            <div className="main-banner mb-3 pt-5" style={{backgroundImage:  `url(${mainBanner})`}}>
              <h1 className="text-center" style={{color:"white"}}>Rate Your Favourite Shows</h1>
            </div>
            <Container className="pb-3">
           <Row>
            <Col md={12} lg={9} xl={9} className="order-2 order-lg-1">
           <CardsView/>
            </Col>
            <Col md={12} lg={3} xl={3} className="mt-sm-4 mt-md-0 mb-4 mb-lg-0 order-1 order-lg-2">
            <div className="my-sidebar">
            {loginContext.loginStatus.isLoggedIn?(
                <React.Fragment>
                <div>
                    <img src={kof} className="img-fluid" />
                </div>
                <div className="mt-4">
                <img src={kof2} className="img-fluid" />
                </div>
                </React.Fragment>
                   
             ):(
                 <React.Fragment>
               <LoginBox/>
               <SignupBox/>
               </React.Fragment>
             )}
               
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

export default MainPage

