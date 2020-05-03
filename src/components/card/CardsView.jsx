import React, { Component } from 'react'
import MovieCard from './MovieCard'
import { data } from '../../tvshowsData'
import { Row, Col } from 'react-bootstrap'

export class CardsView extends Component {
    render() {
        return (
            <div>
                <div className="searchbar-wrap my-4 text-center">
                    <input type="search" className="filter-search w-25"  placeholder="Filter..."/>
                </div>
                <div className="cards-wrap px-3 py-4">
                <Row>
                             
                             {data.map(item=>{
                                 return (
                                     <Col md={6} lg={4} xl={2} className="mb-3" key={item.id}>
                            <MovieCard/>
                          </Col>           
                                 )
                             })}
                      
                      </Row>
                </div>
                   
                 
                    
            </div>
        )
    }
}

export default CardsView
