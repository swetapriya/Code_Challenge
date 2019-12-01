import React from 'react';

function LessonItem (props){
    return( 
    <div>
        <ul>
            <li>
                {props.lesson}
            </li>
        </ul>
    </div>)
}
export default LessonItem;