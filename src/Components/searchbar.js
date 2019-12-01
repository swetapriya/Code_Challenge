import React from 'react';
import {InputGroup, FormControl, Col, Row} from "react-bootstrap";

function SearchBar (props){
    return (
        <Row>
            <Col sm={4}></Col>
            <Col sm={4}>
                <InputGroup >
                    <FormControl
                        placeholder="Search Lesson"
                        aria-label="Search Lesson"
                        aria-describedby="basic-addon2"
                        onChange = {props.search}
                    />
                </InputGroup>
            </Col>
        </Row>
    )
}
export default SearchBar;