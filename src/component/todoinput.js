import React, { Component } from 'react'

export class Todoinput extends Component {
    render() {
        const{item,handleInput,handleForm,editItem} = this.props
        return (

        <form onSubmit={handleForm} >
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                        <i className="fas fa-book bg-transparent"></i>
                    </span>
                </div>
                <input type="text" 
                        onChange={handleInput}
                        value={item}
                        className="form-control mr-3" 
                        placeholder="Add a Todo Item in 45 Alphabet" 
                        aria-label="Username" 
                        aria-describedby="basic-addon1" 
                        required/>
                <button type="submit" 
                        className= {editItem? 'btn btn-success':'btn btn-primary'}  >
                            {editItem? 'Edit Item':'Add Item'} </button>
            </div>
        </form>
        )
    }
}

export default Todoinput
