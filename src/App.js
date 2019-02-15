import React, { Component } from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
 import uuid from "uuid";

class App extends Component {
  state={
    items:[],
    id:uuid(),
    item: "",
    editItem:false //at first it is not edited so false
  }
  handleChange = (e)=> {
    this.setState({item:e.target.value});//works as binding and can setState at once
};
handleSubmit = (e) =>{
  e.preventDefault();//preventing the default submit

const newItem ={
  id:this.state.id,
  title:this.state.item
  
};//grabbing the values here that are passed on text field above
console.log(newItem);
const updatedItems =[...this.state.items,newItem];
// spread operator(...) splitup each and individual values and we are grabbing the values of items array and newitem from above and placing in new array
this.setState({
  items: updatedItems,
  item: "", 
  id: uuid(), //uuid is used for unique id we dont have to work for id
  editItem: false
}) ;
};
clearList= ()=>{
  this.setState({
    items:[]
  });
};
handleDelete=(id)=>{
  const filteredItems =this.state.items.filter(item=>
    item.id!== id);
    this.setState({
      items:filteredItems
    });
};

//filtered method is always going to return a new array and we are going to filter items array in a state.
//we are going to display the items that donot have this id
//item parameter is each and every item in a array
//if item id donot match this id we return filtered items
//setstate updates the filtered item
handleEdit=(id)=>{ 
  // console.log(id);
  const filteredItems =this.state.items.filter(item=>
    item.id!== id);
    const SelectedItem = this.state.items.find( item=>item.id ===id);// we want to find specific item so find
    console.log(SelectedItem);
    this.setState({
      items:filteredItems,
      item:SelectedItem.title , //when we click on edit in todolist items name will display in input field of to do input
    editItem:true,
    id:id
    });
  };
 
render() {
    return (
      <div className="container">
      <div className="row">
      <div className="col-10 mx-auto col-md-8 mt-4">
      <h3 className="text-capitalize text-center">To Do Input</h3>
    <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/> {/* these are the two things we are passing in two do input */}
       <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} /> {/*passing this.set.items prop to TodoList component(clearlist and handlechange are props) */}
      </div>
      </div>
      </div>
     
    );
  }
}

export default App;
