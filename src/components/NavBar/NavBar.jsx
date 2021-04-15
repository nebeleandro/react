import React from 'react';
import CartWidget from '../CartWiget/CartWidget';
import './styleNavBar.css';

const NavBar = () =>{
    return(
        <div className="nav">
            <h1>Hortus Tienda</h1>
            <ul className="navUl">
                <li><p>Plantas</p></li>
                <li><p>Macetas</p></li>
                <li><p>Combos</p></li>
            </ul>
            <div className="CartWidget">
                <CartWidget/>
            </div>    
        </div>
    )
}
export default NavBar
