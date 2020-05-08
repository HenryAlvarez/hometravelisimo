import React, { Component } from 'react';
import './header.scss';
import Logo from '../../img/logotipo.png';
import { AiOutlineMenu, AiOutlineUser, AiOutlineShoppingCart, AiOutlineLike } from "react-icons/ai";

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='header'>
                <div className='container d-flex justify-content-between align-items-center'>
                    <div className='logo'>
                        <img src={Logo} alt='travelisimo'/>
                    </div>
                    <div className='menu d-flex justify-content-end align-items-center'>
                        <div className='itemBtn'><p>Plan your Trip</p></div>
                        <div className='itemBtn'><p>Tourist Info</p></div>
                        <div className='item'><AiOutlineLike className='iconItem' /></div>
                        <div className='item'><AiOutlineShoppingCart className='iconItem' /></div>
                        <div className='item'><AiOutlineUser className='iconItem' /></div>
                        <div><AiOutlineMenu className='icon' /></div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Header;