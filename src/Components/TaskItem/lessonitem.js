import React from 'react';

function LessonItem (props){
    return( 
    <div className='sidebar container-border'>
        <ul>
            <li>
                {props.lesson}
            </li>
        </ul>
    </div>)
}
export default LessonItem;