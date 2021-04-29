
import './App.css';
import React from 'react';
import logo from './logo.svg';
// import ToDo_List from './todolist'
import Login from './login'
import Movies from './movies'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import {Header,Menu} from './Header2'
import {ToDo_List} from './todolist'



class App extends React.Component{
  //  render(){

  // return (
  //   <div className="App">
  //     <Rout />
      
  //   </div>
  // );
  // }

  constructor(){
    super();
    this.state = {
        items:[
        
        {
            text:"Login",
            link:"/login"
        },
        {
            text:"movies",
            link:"/movies"
        },

        {
          text:"TodoList",
          link:"/todolist"
      },
     
    ]
}
}

toggleActive=(text)=>{
    this.state.items.forEach((item)=>item.active=false);
    let item = this.state.items.find(x=>x.text==text);
    item.active = !item.active
    this.setState({items:this.state.items});
}

render(){
    return <Router>
        <Header title="React Website" logo={logo} menu={this.state.items} toggleActive={this.toggleActive} />
        <Switch>
        <Route path="/todolist" >
                <ToDo_List />
            </Route>
            <Route path="/movies" >
                <Movies />
            </Route>
            <Route path="/login" >
                <Login />
            </Route>
            
        </Switch>
    </Router>
}




}






export default App;
