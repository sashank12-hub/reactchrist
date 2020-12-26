import React, { Component } from 'react';
import "./main.css";
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {name,brand,price,preview}=this.props.item;
        return (  
        <div className="product-card" id="clothing">
            <a href="#">
               <img className="product-image" src={preview}/> 
               <div className="product-meta">
               <h4>{name} </h4>
               <h5>{brand}</h5>
               <p>Rs {price} </p>
               
               </div>
            
            </a>
            </div>
            
           
   


        );
    }
}
 
export default Card;