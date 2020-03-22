import React, { Component } from 'react';  
import './App.css';

class App extends Component {
   constructor(props) { 
     super(props);

     this.state = {
       title: 'Employee Management',
       datas: [],
       act:0,
     };

   }

   
  submit = (e) => {
    e.preventDefault();
    let datas = this.state.datas;
    let name = this.refs.name.value;
    let org = this.refs.org.value;
    let email = this.refs.org.value;
    let phone = this.refs.phone.value;
    let designation = this.refs.desgn.value;

    if(this.state.act === 0){
      let eData = {
        name, org, email, phone, designation
      }
      datas.push(eData);
    }
    else {
      let index = this.state.index;
      datas[index].name = name;
      datas[index].org = org;
      datas[index].email = email;
      datas[index].phone  = phone;
      datas[index].desgn = designation;
    }
    
    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.empForm.reset();
  }

  delete = (i) => {
    let datas= this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });   

    this.refs.empForm.reset();

  }

  edit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.org.value = data.org;
    this.refs.email.value = data.email;
    this.refs.phone.value = data.phone;
    this.refs.desgn.value = data.designation;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }

 

   render() {
    
     let datas = this.state.datas;
     
     return (
      
      <div className="App">
        
        <form ref="empForm" className="empForm">
        <h2>{this.state.title}</h2>
          <input type="text" ref="name" placeholder="Name"></input>
          <input type="text" ref="org" placeholder="Company Name"></input>
          <input ref="email" placeholder="Email Id"></input>
          <input type="text" ref="phone" placeholder="Contact number"></input>
          <select ref="desgn" placeholder="Your designation">
            <option>Select designation...</option>
            <option>Software Developer</option>
            <option>Sr Software Developer</option>
            <option>Quality Assurance</option>
            <option>Technical Lead</option>
            <option>Manager</option>
          </select>
          
          <div class="empBtn">
            <button onClick={(e)=>this.submit(e)} type="submit">Save</button>
          </div>
        </form>
        <pre> 
          
          {datas.map((empInfo, i) =>   
                 <div key={i} className="myList">
                  {i+1}. {empInfo.name}, {empInfo.org}, {empInfo.email}, {empInfo.phone}, {empInfo.designation} 
                  <button onClick={()=>this.edit(i)} type="button">Edit</button> 
                  <button onClick={()=>this.delete(i)} type="button">Delete</button> 
                </div>     
        )}   
        </pre>
      </div>
    );
  }
}


export default App;
