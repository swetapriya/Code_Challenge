import React , {Component} from 'react';
import Item from './TaskItem/item';
import {Col, Row} from "react-bootstrap";

class SearchResult extends Component {
    render() {
        return (
            <div>
                <Row>
            <Col sm ={4}></Col>
            <Col sm={4}>
                <ul>
                    {this.props.data.map(function(value, index) {
                        return <Item key={index} val={value} />
                    })}
                </ul>    
            </Col>
        </Row>
            </div>
        )
    }
}

  export default SearchResult;