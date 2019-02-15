import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const {items, clearList, handleDelete, handleEdit} = this.props;
    return (
      <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
        {/* //mapping items reflecting each and every item in array */}
        {items.map(item => {       //we are using javascript here so curly brackets in start
        return( <TodoItem key={item.id}  //taking the value of id and title that is inputted in text field by mapping
         title={item.title} //key and title are props here 
         handleDelete={ () => handleDelete(item.id)}
         handleEdit={ () => handleEdit(item.id)}
         />  
        
        //aerrow function returns the reference
        //todoList donot need handleDelete so we pass hadleDelete in todoItem from above
        );
        })}
    
      
      <button type="button" className="btn btn-danger btn-block text-capitalize mt-5" onClick={clearList}>clear list
      </button>
      
      </ul>
    );
  }
}
