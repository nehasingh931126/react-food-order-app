import React from "react";
import classes from './MealItemForm.module.css';
import Input from "../UI/input";
const MealItemForm = (props) =>{
    // const [itemForm, setItemForm] = useState('');

    const submitHandler = (event)=> {
        console.log(event.target.value);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input label="Amount" input={{type:"number", id: "amount", min: "1", max: "5", step: "" , defaultValue: "1"}}/>
            <button type="submit">+ Add</button>
        </form>
    )
}

export default MealItemForm;
