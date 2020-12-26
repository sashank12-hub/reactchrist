import React, { Component } from 'react';
import './banner.css'
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.props.count!==nextProps.count){
            return true;
        }else return false;
    }
    componentDidUpdate(){
        console.log("banner updated")
    }
    componentWillUnmount(){
        console.log("banner unmounted")
  
    }
    render() { 
        let{count}=this.props
        return (<div className="banner">
             
           
            <h1 style={{color: "white",marginLeft:"20px"}}> {count}</h1> 
            </div>  );
    }
}
 
export default Banner;