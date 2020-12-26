import React, { Component } from 'react';
import "./header.css"
export const Header=()=>{
    return(
        <nav className="topbar">
      <div className="left-menu">
        <div className="logo"><a href="index.html"><span>Shop</span>lane</a></div>
        <a href="#clothing">Clothing</a>
        <a href="#accessory">Accessories</a>
      </div>
      <div className="search-wrapper">
        <i className="fas fa-search" aria-hidden="true"></i>
        <input className="search-box" type="text" name="search" placeholder="Search for Clothing and Accessories"/>
      </div>
      <div className="right-menu">
        <div className="cart-wrapper">
          <p className="cart-count">0</p>
          <a href="checkout.html"><i class="fas fa-shopping-cart" style={{color:"yellow",opacity:"0.4"}}></i></a>
        </div>
        <img className="avatar"
          src={"https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"}/>
          <i className="fas fa-grip-lines l"></i>
          </div>
          
    </nav>
    )
}