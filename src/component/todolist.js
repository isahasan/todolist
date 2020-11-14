import React, { Component } from 'react'
import Todoitem from './todoitem'

export class Todolist extends Component {

    
    render() {
        const {items,clearAll,handleDelete,handleEdit}= this.props
        
        return (
            <div>
                <h2 className="text-center mt-6">Todo lists</h2>
                <ul className="list-group">
                    {items.map((el)=>
                        <Todoitem   title={el.item} 
                                    key={el.id} 
                                    handleDelete={handleDelete} 
                                    handleEdit={handleEdit} 
                                    id={el.id}
                                    />
                    )}
                    
                    <button type="button" 
                    onClick={clearAll} 
                    className="btn btn-primary btn-lg btn-block mt-4"> Clear All</button>
                </ul>
            </div>
        )
    }
}

export default Todolist
