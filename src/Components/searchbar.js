import React from 'react';
import {Col, Row} from "react-bootstrap";

function SearchBar (props){
    return ( 
        <div className="search-container">
            <Row>
                <Col sm={4}></Col>
                <Col sm={4}>
                    <form onSubmit={props.handleSubmit}>
                        <input
                            type="text"
                            name="lala"
                            onChange={props.search}
                            className='search'
                            placeholder='Search'/>
                    </form>
                </Col>
            </Row>
        </div>
    )
}

export default SearchBar;