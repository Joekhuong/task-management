import React, { Component } from 'react';

class TaskItem extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
      } 

    changeStatus = (id)=>{
        this.props.changestatusTaskItem(id)
    }

    deleteTask = (id)=>{
        this.props.deleteTaskItem(id)
    }

    openAddTaskFormButton = (id)=>{
        this.props.openAddTaskFormItem(id)
    }

    render() {
        return (
                
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.taskname}</td>
                    <td className="text-center">
                    <span className={this.props.status == 1 ? "label label-success" : "label label-danger"} onClick={(event)=>this.changeStatus(this.props.id)}>
                        {
                           this.props.status == 1 ? "Active" : "Queue" 
                        }
                        
                    </span>
                    </td>
                    <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={(event)=>this.openAddTaskFormButton(this.props.id)}>
                        <span className="fa fa-pencil mr-5" />Edit
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={(event)=>this.deleteTask(this.props.id)}>
                        <span className="fa fa-trash mr-5" />Delete
                    </button>
                    </td>
                </tr>
        );
    }
}

export default TaskItem;