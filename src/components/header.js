
import React, { Component } from 'react';
import logo from '../images/logo.png'


class Header extends Component {
 
  state = {
    classShow: true,
  }
  toggleclass = ()=>{
    this.setState({
      classShow:!this.state.classShow
    })
  }

render() {  
  return (
      <header id="home-header">
      <div class="wrapper">
          <nav>
            <div class="brand-logo"><a href="/"> <img src={logo} alt="Logo" /></a></div>                
              <ul id="menu" className={this.state.classShow ? "hide-menu" : "show-menu"}>
                  <li><a href="/">Home </a></li>
                  <li> <a href="/about/">About</a></li>
                  <li> <a href="/work/">Work </a></li>
                  <li><a href="/contact/">Contact Me</a></li>
              </ul>
              <div class="mobile-menu-btn" id="menu-button"><i class="fas fa-bars" onClick={this.toggleclass}></i></div>
            </nav>
      </div>
  </header>
  );
}
}

export default Header
