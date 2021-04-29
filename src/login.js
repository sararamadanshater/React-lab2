import logo from './logo.svg';
import './App.css';
import React from 'react';


class Login extends React.Component{

    constructor(props){
        super();
        this.state={
            
            password:"",
            email:""
        }
    }

    
    setInputValue=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    login=async ()=>{
        let user = {
            email:this.state.email,
            password:this.state.password
        }
        let res= await fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        });
        let resJson = await res.json();
        if(resJson.token){

            //alert("Login success");
           


        }else{
            alert(resJson.error)
        }
    }

    render(){
        return <div class="form-group w-50 m-auto text-center">
            <h1>Login</h1>
            
            <input placeholder="E-mail" class="form-control" type="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} name="email" /><br/>
            <input placeholder="Password" class="form-control" type="password" value={this.state.password} onChange={this.setInputValue} name="password" /><br/>
            <button class="btn btn-info" onClick={this.login}>Login</button>
        </div>
    }
}



export default Login