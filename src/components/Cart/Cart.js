import React from 'react';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
const Cart = ()=> {
    const cartItems = <ul className={classes['cart-items']}>
        {[{id: 'c1', name: 'Sushi', amout: 2, price: 12.99 }].map((item)=> <li>{item.name}</li>)}
    </ul>;

    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>ABC</button>
                <button className={classes.button}>Close</button>
            </div>
        </Modal>
    )

}


export default Cart;