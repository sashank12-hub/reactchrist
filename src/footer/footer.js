import React, { Component } from 'react';
import "./footer.css";
export const Footer=()=>{
    return(
        <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                
                <div className="footer-pad">
                  <h4>Online <store></store>
                  </h4>
                  <ul className="list-unstyled">
                    <li><a href="#"></a></li>
                    <li><a href="#" className="footer-link">Men Clothing</a></li>
                    <li> <a href="#" className="footer-link">Men Accessories</a></li>
                    <li> <a href="#" className="footer-link">Women Accessories</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
               
                <div className="footer-pad">
                  <h4>Helpful Links</h4>
                  <ul className="list-unstyled">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Accessibility</a></li>
                    <li><a href="#">About</a></li>
    
    
                    <li><a href="#">Webmaster</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
               
                <div className="footer-pad">
                  <h4>Partners</h4>
                  <ul className="list-unstyled">
                    <li><a href="#">Zara</a></li>
                    <li><a href="#">Pantaloons</a></li>
                    <li><a href="#">Levis</a></li>
    
                    <li><a href="#">+ Many More</a></li>
                    <li>
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <h4>Follow Us</h4>
                <ul className="social-network social-circle">
                  <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 copy">
                <p className="text-center">&copy; Copyright 2018 - Company Name. All rights reserved.</p>
              </div>
            </div>
    
    
          </div>
        </div>
      </footer>

    )
}