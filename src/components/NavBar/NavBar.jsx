import React from 'react';
import CartWidget from '../CartWiget/CartWidget';
import './styleNavBar.css';

const NavBar = () =>{
    return(
        <div className="nav">
            <h1>Hortus Tienda</h1>
            <ul className="navUl">
                <li><p>List1</p></li>
                <li><p>List2</p></li>
                <li><p>List3</p></li>
            </ul>
            <CartWidget id="CartWidget"/>
        </div>
    )
}
export default NavBar
