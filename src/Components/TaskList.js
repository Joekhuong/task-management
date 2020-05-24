import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

  constructor(props){
    super(props);
    this.state = {
      seachingValue: "",
      filterStatus: ""
    }
  } 

  searchingTextbox = (event)=>{

    this.setState({
      seachingValue: event.target.value
    })
    this.props.searchingFilter(event.target.value, this.state.filterStatus)
  }


  filterSelectbox = (event)=>{
    this.setState({
      filterStatus: event.target.value
    })
    this.props.searchingFilter(this.state.seachingValue, event.target.value)
  }

    render() {
        return (
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th className="text-center">No.</th>
                      <th className="text-center">Task Name</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td />
                      <td>
                        <input type="text" value={this.state.seachingValue} className="form-control" onChange={(event)=>this.searchingTextbox(event)}/>
                      </td>
                      <td>
                        <select className="form-control" value={this.state.filterStatus} onChange= {(event)=>this.filterSelectbox(event)} >
                          <option value="">All Status</option>
                          <option value={0}>Queue</option>
                          <option value={1}>Active</option>
                        </select>
                      </td>
                      <td />
                    </tr>
                    {this.props.dataTaskList.map((val,key)=>{
                      return(
                        <TaskItem key={key} id={val.id} taskname={val.taskname} status={val.status} deleteTaskItem={this.props.deleteTaskList} changestatusTaskItem={this.props.changestatusTaskList} openAddTaskFormItem={this.props.openAddTaskForm} />
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
        );
    }
}

export default TaskList;