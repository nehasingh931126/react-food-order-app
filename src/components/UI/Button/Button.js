import React, {Fragment} from 'react';
import classes from './Button.module.css';
function Button(props) {
    return (
        <Fragment>
            <button className={`${classes.button} ${props.className}`}type={props.type || 'button'}>{props.buttonName}</button>
        </Fragment>
    )
}

export default Button;
