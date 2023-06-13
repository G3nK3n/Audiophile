import React, {useState} from "react";
import classes from './SummaryContents.module.css';


const SummaryContents = props => {

    const [counter, setCounter] = useState(1);

    const decrementValue = () => {
        if(counter > 1) {
            setCounter(counter - 1)
        }
    }

    return(
        <div className={classes.CartContents}>
            <img src={props.theImage} />
            <div className={classes.itemDetail}>
                <p className={classes.itemName}>{props.itemName}</p>
                <p className={classes.itemPrice}>$ {props.price}</p>
            </div>
            <p className={classes.getQuantity}>x{props.getQuantity}</p>
        </div>
    )
}

export default SummaryContents;