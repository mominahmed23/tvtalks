import React, { useState } from 'react'
import MovieCard from './MovieCard'
import { data } from '../../tvshowsData'
import { Row, Col } from 'react-bootstrap'

const CardsView = () => {
    const [filterState, setfilterState] = useState(data);
    const handleFilter=(e)=>{

        const filteredData = data.filter((element)=>{
            if(element.title.toLowerCase().includes(e.target.value.toLowerCase())){
             return element   
            }    
        });
        setfilterState(filteredData);
    }
    
    return (
        <div className="default-shadow pt-4">
                <div className="searchbar-wrap mb-4 text-center">
                    <input type="search" className="filter-search w-50"  placeholder="Filter..." onChange={handleFilter}/>
                </div>
                <div className="cards-wrap default-scrollbar px-3 py-2">
                <Row>
                             {filterState.length === 0 ? (
                                 <h2 className="text-center text-muted mx-auto">No Shows Found</h2>
                             ):(
                                filterState.map(item=>{
                                    return (
                                        <Col md={6} lg={4} xl={3} className="mb-3" key={item.id}>
                               <MovieCard itemData={item}/>
                             </Col>           
                                    )
                                })
                             )}
                           
                      
                      </Row>
                </div>
                   
                 
                    
            </div>
    )
}

export default CardsView

