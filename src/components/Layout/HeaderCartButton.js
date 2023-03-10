import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import React from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props)=> {
    const cartCtx = useContext(CartContext);
    console.log(cartCtx)
    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item)=> {
        return currentNumber+ item.amount
    }, 0);
    return (
        <button className = {classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;