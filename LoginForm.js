import React, { Component } from 'react'

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={
            uname:"",
            password:"",
            error:{
              unameerror:"",
              pwderror:"",
            },
            unamevalid:false,
            pwdvalid:false,
            formvalid:false
          }

    }


 methodSet=(ev)=>{
   const codekey=/^[A-Za-z0-9]{5,}@[A-Za-z0-9.]{5,12}$/;
   
     const nm=ev.target.name;
     const val=ev.target.value;


     this.setState({[nm]:val});
 }; 

  render() {
    return (
      <div>
        
      <form>
        Name:-<input type="text"  name="uname" value={this.state.uname} onChange={this.methodSet} /><br/>
        Password:-<input type="password"  name="password" value={this.state.password} onChange={this.methodSet} /><br/>
    <input type="submit" value="login" disabled={this.state.formvalid}/>
      </form>
      
      </div>

    )
  }
}
