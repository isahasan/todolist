import React,{Component} from 'react'
import {v1 as uuid} from "uuid";
import './App.css';
import Todoinput from './component/todoinput';
import Todolist from './component/todolist'

class App extends Component {
  state={
    items:[],
    id: uuid(),
    item:'',
    edititem: false,
    complete:false
  }

  
  handleInput =(event)=>{
    this.setState({item: event.target.value})
  }
  handleForm=(event)=> {
    event.preventDefault()
    const newItem = {
      id:this.state.id,
      item: this.state.item,
      complete:false }
      // console.log(newItem)


    const updateitem =[...this.state.items, newItem]

    this.setState({
      items:updateitem,
      id: uuid(),
      item:'',
      edititem: false,
    })
  }
  handleClerrAll = ()=>{
    this.setState({
      items:[]
    })
  }
  handleDelete=(id)=>{
    const filtereditem = this.state.items.filter(el=> el.id!== id)
    this.setState({
      items: filtereditem 
    })
  }
  handleEdit=(id)=>{
    console.log(id)
    const filtereditem = this.state.items.filter(el=> el.id!== id)
    const finditem = this.state.items.find(el=> el.id === id)
    this.setState({
      items: filtereditem,
      item: finditem.item,
      id: finditem.id,
      edititem: true,
    })
  }
          

  render(){
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col col-10 mx-auto col-md-8 mt-4'>
            <h2 className = 'text-capitalize text-center'> todo App </h2>
              <Todoinput  handleInput={this.handleInput} 
                          handleForm={this.handleForm} 
                          item= {this.state.item}
                          editItem={this.state.edititem}  />
                          
              <Todolist items={this.state.items} 
                        clearAll={this.handleClerrAll} 
                        handleDelete={this.handleDelete}
                        handleEdit={this.handleEdit}
                       />
            </div>
          </div>
        </div>
      
      </div>
    )
  }
}

export default App;
