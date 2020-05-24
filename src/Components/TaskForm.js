import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props){
      super(props);
      this.state = {
        inputNamevalueaddtask: "",
        inputIdvalueaddtask: "",
        statusaddtaskform: "0",
        objStatus : null
      }
    }

    preventloadpage = (event)=>{
      event.preventDefault()

      var objTask = {"id": parseInt(this.state.inputIdvalueaddtask), "taskname": this.state.inputNamevalueaddtask, "status": parseInt(this.state.statusaddtaskform)};
      console.log(objTask)
      this.props.addmoreTask(objTask)
    }

    disappearTaskForm =(event)=>{
      this.props.closetaskform()
    }

    addtaskinputName = (event)=>{
      this.setState({
        inputNamevalueaddtask: event.target.value
      })
    }

    addtaskinputId = (event)=>{
      this.setState({
        inputIdvalueaddtask: event.target.value
      })
    }

    statusaddtaskform = (event)=>{
      this.setState({
        statusaddtaskform: event.target.value
      })
    }

    componentWillMount(){
      if(this.props.objTaskApp){        
        this.setState({
          inputIdvalueaddtask: this.props.objTaskApp.id,
          inputNamevalueaddtask: this.props.objTaskApp.taskname,
          statusaddtaskform: this.props.objTaskApp.status
        })
      }
      this.setState({
        objStatus: this.props.objTaskApp
      })
    }

    componentWillReceiveProps(nextProps){
      console.log(nextProps)
      if(nextProps.objTaskApp){
        this.setState({
          inputIdvalueaddtask: nextProps.objTaskApp.id,
          inputNamevalueaddtask: nextProps.objTaskApp.taskname,
          statusaddtaskform: nextProps.objTaskApp.status,
          objStatus: nextProps.objTaskApp
        })
      }
      else
      {
        this.setState({
          inputNamevalueaddtask: "",
          inputIdvalueaddtask: "",
          statusaddtaskform: "0",
          objStatus: nextProps.objTaskApp
        })
      }
    }

    render() {
        return (
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">{this.state.objStatus == null ? "Add Task" : "Edit Task"}
                <span className="fa fa-times-circle" style={{float: "right"}}  onClick={(event)=>this.disappearTaskForm(event)}></span>
                </h3>                
              </div>
              <div className="panel-body">
                <form onSubmit={(event)=>this.preventloadpage(event)}>
                  <div className="form-group">
                    <label>ID :</label>
                    <input value={this.state.inputIdvalueaddtask} readOnly={this.state.objStatus == null ? false : true} type="number" className="form-control" onChange={(event)=>this.addtaskinputId(event)}/>
                    <label>Task Name :</label>
                    <input value={this.state.inputNamevalueaddtask} type="text" className="form-control" onChange={(event)=>this.addtaskinputName(event)} />
                  </div>
                  <label>Status :</label>
                  <select value={this.state.statusaddtaskform} className="form-control" required="required" onChange = {(event)=>this.statusaddtaskform(event)}>
                    <option value={1}>Active</option>
                    <option value={0}>Queue</option>
                  </select>
                  <br />
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning" >{this.state.objStatus == null ? "Add" : "Edit"}</button>&nbsp;
                    <button className="btn btn-danger" onClick={(event)=>this.disappearTaskForm(event)}>Delete</button>
                  </div>
                </form>
              </div>
            </div>
        );
    }
}

export default TaskForm;