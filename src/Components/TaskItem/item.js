import React from 'react';

function Item(props){
    return (
    <div>
        <li>
            {props.val.name}
        </li>
    </div>
    )
}
export default Item;