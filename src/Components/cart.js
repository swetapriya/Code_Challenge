import React, {Component} from 'react';
import LessonItem from '../Components/TaskItem/lessonitem';

class Cart extends Component {
    render(){ 
        return (
            <div className = "cart">
                <h3>My Cart</h3>
                <div className="panel-body">
                    {this.props.lesson.length > 0 && (
                        <div className="cart__body">
                            {this.props.lesson.map((lesson,index) => (<LessonItem key={index} lesson = {lesson} />))}
                        </div>
                    )}
                    {this.props.lesson.length === 0 && (
                        <div className="alert alert-info">Cart is empty</div>
                    )}
                </div>
            </div>   
        );
    }
}
export default Cart;