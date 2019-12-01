import React from 'react';
import {ListGroupItem} from "react-bootstrap";

function TaskItem(props){
    return (
        <div>
            <ListGroupItem className = "listGroup"> 
                {props.taskitem.name}
                <span className = "addButton"> 
                    <button onClick = {()=>props.handleShow(props.taskitem.name)}>
                        Add
                    </button>
                </span>
            </ListGroupItem>
        </div>
    )
}
export default TaskItem;