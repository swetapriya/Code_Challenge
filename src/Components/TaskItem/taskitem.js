import React from 'react';
import {ListGroupItem, Button} from "react-bootstrap";

function TaskItem(props){
    return (
        <div>
            <ListGroupItem className = "listGroup"> 
                {props.taskitem.name}
                <span className = "addButton"> 
                    <Button 
                        style = {{ "display" : (props.lesson.indexOf(props.taskitem.name) !== -1)? "none" : "block"}}
                        onClick = {()=>props.handleShow(props.taskitem.name)}>
                            Add
                    </Button>
                    <Button 
                        style = {{ "display" : (props.lesson.indexOf(props.taskitem.name) !== -1)? "block" : "none"}}
                        onClick = {()=>props.removeItem(props.taskitem.name)}>
                            Remove
                    </Button>
                </span>
            </ListGroupItem>
        </div>
    )
}
export default TaskItem;