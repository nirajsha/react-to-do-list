import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const {title, handleDelete, handleEdit} = this.props;
    return (
     <li className="list-group-item text-capitalize d-flex justify-content-around my-2">
     <h6>{title}</h6>
     <div className="todo-icon">
     <span className="text-success" onClick={handleEdit}>
     <i className="fa fa-edit mx-2"></i>
     </span>
     <span className="text-danger" onClick={handleDelete} > 
     <i className="fa fa-trash"></i>
     </span>
     </div>
     </li>
    )
  }
}
