import React, { useRef, useState } from "react";
import classes from './MealItemForm.module.css';
import Input from "../UI/input";
const MealItemForm = (props) =>{
    const [amountIsValid, setAmountValidity] = useState(true)
    const amountInputRef = useRef();
    // const [itemForm, setItemForm] = useState('');

    const submitHandler = (event)=> {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || 
            enteredAmountNumber < 1 || 
            enteredAmountNumber > 5){
            setAmountValidity(false);
            return 
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input ref={amountInputRef} label="Amount" input={{ type: "number", id: 'amount_' + props.id,  min: "1", max: "5", step: "" , defaultValue: "1"}}/>
            <button type="submit">+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}

export default MealItemForm;
