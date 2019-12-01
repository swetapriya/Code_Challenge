import React, {Component} from 'react';
import TaskItem from './TaskItem/taskitem';
import Cart from './cart';
import {Row, Col, Container, ListGroup, Button, Modal, Form} from 'react-bootstrap';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            show : false,
            login : false,
            lesson: []
        };
    }

    //Show the model for login and if already login add the lesson to cart
    handleShow = (lesson) =>{
        if (!this.state.login){
            this.setState({show:true});
        }
        if (this.state.lesson.indexOf(lesson) === -1){
            this.setState({
                lesson:[...this.state.lesson,lesson]
            })
        }
    }

    // To close the login model without login
    handleClose = () => {
        this.setState({show:false});
    }

    //close the login model after successfully login and display the message
    loginClose = () => {
        this.setState({
            show:false,
            login: true
        });
    }
    
    render(){
        const taskListItems = this.props.data.map((data,index) => <TaskItem key = {index} taskitem = {data} handleShow ={this.handleShow} />)
        return(
            <div>
                <Container> 
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                {taskListItems} 
                            </ListGroup>
                        </Col>
                        <Col sm={4}>
                            <span className = {this.state.login? "showLogin": "addButton"}>
                                User Logged In
                            </span>
                            <br/>
                            <Button variant="primary" size="sm" onClick = {this.props.sortByDuration}>
                                Sort By Duration
                            </Button> &nbsp;
                            <Button variant="primary" size="sm" onClick = {this.props.sortByDate}>
                                Sort By PublishDate
                            </Button>
                        </Col>
                        <Col sm={4}>
                            <Cart lesson = {this.state.lesson}/>
                        </Col>
                    </Row>
                </Container>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control  placeholder="Enter UserName" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={this.loginClose}>
                            Login
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Home;