/* eslint-disable no-undef */
import React, { Component } from 'react';
import TaskForm from './Components/TaskForm';
import Controls from './Components/Controls';
import TaskList from './Components/TaskList';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data_tasks: [],
      isDisplay: false,
      objTask: null,
      taskListSearching: "",
      taskListFiletring: "",
      keywordSearching: "",
      sorting: "sortAZ",
    }
  } 

  componentWillMount(){
    if(localStorage.getItem('tasks'))
    {
      var strTasks = localStorage.getItem('tasks');
      var objTasks = JSON.parse(strTasks);
      this.setState({
        data_tasks: objTasks
      })
    }
  }

  addTask = (event) =>{
    var newTasks = [
    {id:1, taskname:"React", status:1},
    {id:2, taskname:"Angular", status:0}, 
    {id:3, taskname:"JavaScript", status:1}, 
    {id:4, taskname:"Nodejs", status:0}
    ]
    this.setState({
      data_tasks: newTasks,
      taskListSearching: "",
      taskListFiletring: ""

    })
    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(newTasks)); 
  }

  appearTaskForm=(event)=>{
    this.setState({
      isDisplay: true,
      objTask: null
    })
  }

  closeTaskForm = () =>{
    this.setState({
      isDisplay: false,
      objTask: null
    })
  }

  addmoretask = (objTask)=>{
    var check =true;
    var moretask = this.state.data_tasks;
    for(var i = 0; i<moretask.length; i++){
      if(moretask[i].id == objTask.id){
        check = false;
      }       
    }
    if(check)
    {
      moretask.push(objTask)
      this.setState({
        data_tasks: moretask
      })
      localStorage.clear();
      localStorage.setItem('tasks', JSON.stringify(moretask))
    }
    else
    {
     for(var j = 0; j < moretask.length; j++ ){
       if(moretask[j].id == objTask.id){
          moretask[j].taskname = objTask.taskname;
          moretask[j].status = objTask.status;
       }
     }
     this.setState({
      inputNamevalueaddtask: moretask.taskname,
      statusaddtaskform: moretask.status,
      isDisplay: false,
      objTask: null
     })
    }
  }

  changestatustasklist =(id)=>{
    var temptask = this.state.data_tasks;
    for(var i = 0; i <temptask.length; i++){
      if(temptask[i].id == id){
        if(temptask[i].status == 1){
          temptask[i].status = 0;
        }
        else if(temptask[i].status == 0){
          temptask[i].status = 1;
        }
      }
    }
    this.setState({
      data_tasks: temptask
    })
    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(temptask))
  }
  
  deletetasklist = (id)=>{
    var temptaskDelete = this.state.data_tasks;
    for(var i = 0; i <temptaskDelete.length; i++){
      if(temptaskDelete[i].id == id){
        temptaskDelete.splice(i, 1);
      }
    }
    this.setState({
      data_tasks: temptaskDelete
    })

    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(temptaskDelete))
  }

  openaddtaskform = (id)=>{
    this.setState({
      isDisplay: true,
    })
    var temptaskAddTaskForm = this.state.data_tasks;
    for(var i = 0; i <temptaskAddTaskForm.length; i++){
      if(temptaskAddTaskForm[i].id==id){        
        this.setState({
          objTask: temptaskAddTaskForm[i]
        })
      }
    }
  }

  searchingFiletring = (valueSearching, valueFiltering)=>{
    this.setState({
      taskListSearching: valueSearching,
      taskListFiletring: valueFiltering
    })
    
  }

  searchingBtn = (keyword) =>{
    this.setState({
      keywordSearching: keyword
    })
    
  }

  SortingCtl = (paramSorting) =>{
    this.setState({
      sorting: paramSorting
    })
  }

  render(){


  var data = this.state.data_tasks;
  var resultSearching = [];
  if(this.state.taskListSearching == "" ){
    if(this.state.taskListFiletring == "")
    {
      data = this.state.data_tasks;
    }
    else
    {
      for(var i = 0; i < data.length; i++){
        if(data[i].status == this.state.taskListFiletring){        
            resultSearching.push(data[i]);        
        }
      }
      data = resultSearching;
    }
  }
  else {
    console.log(this.state.taskListSearching);
    console.log(this.state.taskListFiletring);
    if(this.state.taskListFiletring == "")
    {
      console.log(this.state.taskListSearching)
      for(var i = 0; i < data.length; i++){
        if(data[i].taskname.toLowerCase().includes(this.state.taskListSearching.toLowerCase()) == true){        
            resultSearching.push(data[i]);        
        }
      }
      data = resultSearching;
    }
    else
    {
      for(var i = 0; i < data.length; i++){
        if(data[i].taskname.toLowerCase().includes(this.state.taskListSearching.toLowerCase()) == true && data[i].status == this.state.taskListFiletring){        
            resultSearching.push(data[i]);        
        }
      }
      data = resultSearching;
    }
  }
  if(this.state.keywordSearching != "")
  {
    data = data.filter((obj) => {
      return obj.taskname == this.state.keywordSearching;
    });
  }
  //
  if(this.state.sorting == "sortAZ"){
    for(var r = 0; r < data.length; r++){
      for(var t = r + 1; t<data.length; t++ ){
        if( data[r].taskname.toLowerCase() > data[t].taskname.toLowerCase()){
          var temp = data[r].taskname;
          data[r].taskname = data[t].taskname;
          data[t].taskname = temp;
        }
      }
    }
  }

  if(this.state.sorting == "sortZA"){
    for(var r = 0; r < data.length; r++){
      for(var t = r + 1; t<data.length; t++ ){
        if( data[r].taskname.toLowerCase() < data[t].taskname.toLowerCase()){
          var temp = data[r].taskname;
          data[r].taskname = data[t].taskname;
          data[t].taskname = temp;
        }
      }
    }
  }

  return (
    <div className="container">
        <div className="text-center">
          <h1>Task Management</h1>
          <hr />
        </div>
        <div className="row">
          <div className={this.state.isDisplay == false ? "" : "col-xs-4 col-sm-4 col-md-4 col-lg-4 taskform"}>
            {this.state.isDisplay == false ? "":<TaskForm objTaskApp={this.state.objTask} deleteTask={this.deletetask} addmoreTask={this.addmoretask} closetaskform={()=>this.closeTaskForm()}/>}
          </div>
          <div className={this.state.isDisplay == false ? "col-xs-12 col-sm-12 col-md-12 col-lg-12" : "col-xs-8 col-sm-8 col-md-8 col-lg-8"}>
            <button type="button" className="btn btn-primary" onClick={(event)=>this.appearTaskForm(event)}>
              <span className="fa fa-plus mr-5" /> Add Tasks
            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-success" onClick={(event)=>this.addTask(event)}>
              <span className="fa fa-puzzle-piece mr-5" /> Generate Data
            </button>
            <Controls isSearchingBtn={this.searchingBtn} isSortingCtl={this.SortingCtl} />
            <TaskList searchingFilter={this.searchingFiletring} openAddTaskForm={this.openaddtaskform} changestatusTaskList={this.changestatustasklist} dataTaskList = {data} deleteTaskList={this.deletetasklist}/>
          </div>
        </div>
      </div>
  );
}
  
}

export default App;
