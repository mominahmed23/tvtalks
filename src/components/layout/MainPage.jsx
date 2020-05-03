import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MyNav from './MyNav';
import mainBanner from "../../images/banner-v2.jpg";
export class MainPage extends Component {
    render() {
        return (
            <main>
                 <MyNav/>
                    <div className="main-banner mb-4 default-shadow" style={{backgroundImage: "url("+mainBanner+")"}}>
                     
                    </div>
                 <Container fluid>
                    <Row>
                        <Col md={12} lg={9} xl={9}>
                            <div style={{backgroundColor:"red", height:"250px"}}>  
                            
                            </div>
                        </Col>
                        <Col md={12} lg={3} xl={3}>
                            <div style={{backgroundColor:"yellow", height:"250px"}}>

                            </div>
                        </Col>
                    </Row>
               </Container>
            </main>
         
           
        )
    }
}

export default MainPage

