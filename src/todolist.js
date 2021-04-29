
import React from 'react';
import './todolist.css';

class ToDo_List extends React.Component{
    constructor(){
        super();
        this.state={
            todo_list:[]
        }
    }
    addTask=(list)=>{
        this.state.todo_list.push(list);
        this.setState({todo_list:this.state.todo_list});
        
    }
    render(){
        return <div>
            <h1 class="text-center">TO DO LIST</h1>
            <DisplayAllTasks todo_list={this.state.todo_list} />
            <AddTask addTask={this.addTask} />
            
        </div>
    }
}

class AddTask extends React.Component{

    constructor(props){
        super();
        this.state={
            task:"",
           
        }
    }
  
    addTask=()=>{
        let list = {
            task:this.state.task,
            
        }
  
        this.props.addTask(list);
    }

    
    render(){
        return <div class="input-group w-50 mx-auto my-5 ">
            <strong>TASK :</strong> <input class="form-control mx-3" type="text" value={this.state.task} onChange={(e)=>this.setState({task:e.target.value})} />
            
            
            <button class="btn btn-success" onClick={this.addTask} >Add</button>
        </div>
    }
  }


  class DisplayList extends React.Component{


    confirmTask(){

    }

    delTask(){
        
        // const newState = this.state.todo_list.slice();
        //    if (newState.indexOf(list) > -1) {
        //       newState.splice(newState.indexOf(list), 1);
        //        this.setState({data: newState})
        
        //   }
    }
    render(){
        return <div class=" w-50 m-auto">
             
             <ul class="list-group text-left ">
               <li class="list-group-item list-group-item-light">{this.props.list.task}<button onClick={this.delTask()} class="btn btn-danger float-right mx-2">N</button><button onClick={this.confirmTask} class="btn btn-success float-right">Y</button></li>
            </ul>
            
        </div>
    }
}

class DisplayAllTasks extends React.Component{
    render(){
        return <div>
            {this.props.todo_list.length > 0 ?this.props.todo_list.map((item)=>{
                return <DisplayList list={item} key={item.task} />
            }):""}
        </div>
    }
}

DisplayAllTasks.defaultProps={
    todo_list:[]
}

  

 export {ToDo_List}; 