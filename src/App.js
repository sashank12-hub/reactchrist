import React, { Component } from 'react';
import { Header } from './header/header';
import  './App.css'
import {Footer} from "./footer/footer";
import Card from './main/main';
import Banner from './banner/banner';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      count:0,
      api:[],
      api1:[],
      api2:[],
      loader:true,
      toggle:true
}
}

componentDidMount(){

  setInterval(() => {this.setState({count:this.state.count+1})
  
}, 1000);
  fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product')
  .then(Response=>Response.json()).then(json=>this.setState({api:json,loader:false,api2:json.filter(item=>item.isAccessory===true), api1:json?.filter(item=>item.isAccessory===false)}))
}

  
  render() {  let{loader,api,count,api1,api2,toggle}=this.state;
   
   
    
    
   
    return (  <>
     
     <Header/>
     <div className="button" style={{background: "linear-gradient(59deg, #3A6073, #16222A"}}>
     <button className="btn" onClick={()=>this.setState({toggle:!this.state.toggle})}>TOGGLE</button>
     </div>
     
     {toggle?<Banner count={count}/>:""}
     
     <div className="main">
     {loader?<h1>Loading...</h1>:
      <>
       <h1 className="section-heading " id="clothing">Clothing</h1>
       { api1.map((item,key)=>{return  <Card item={item}/>} )}
     
     <h1 className="section-heading " id="accessory">Accessory</h1>
     { api2.map((item,key)=>{return  <Card item={item}/>} )}
    

    </>
    }
     </div>
    
     <Footer/>
    
     
     
    
    
      </>
);
  }
}
 
export default App;
