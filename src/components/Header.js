import React, { Component } from 'react';

import icon from '../assets/icon.png'

class Header extends Component{
  render(){
    return (
      <header id="header">
        <h1>Facebook</h1>
        <div id="perfil">
          <p>Meu perfil</p>
          <img width="32" height="32" src={icon}/>
        </div>
      </header>
    )
  }
}

export default Header;