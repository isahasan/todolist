import React, { Component } from 'react'

export class todoitem extends Component {
 state ={
    value:true
 }
    
     handleComplete() {
        this.setState({value: this.state.value? false:true})            
    } 
    
    render() {

    const {title,id, handleDelete,handleEdit}=this.props
    const complete = this.state.value
    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="d-inline-block text-truncate bg-transparent" 
                    style={{maxWidth: "400px"}}> {title} </span>
                <div className='bg-transparent'>
                    <button type="button" 
                            onClick={()=>handleDelete(id)} 
                            className="btn btn-danger badge-pill mr-3">
                        <i className="far fa-trash-alt bg-transparent"></i>
                    </button>
                    <button type="button" 
                            onClick={()=>handleEdit(id)} 
                            className="btn btn-primary badge-pill mr-3">
                        <i className="far fa-edit bg-transparent"></i>
                    </button>

                    <button type="button" 
                        onClick={()=>this.handleComplete()}
                        className={complete ? "btn btn-success badge-pill" : "btn btn-danger badge-pill"}>
                    <i className="far fa-check-circle bg-transparent"></i>
                    </button>

                </div>
            </li>
        </>
        )
    }
}

export default todoitem
