import React, {useEffect, useState} from "react";
import classes from './CartContents.module.css';


const CartContents = (props) => {

    const [counter, setCounter] = useState(props.theQuantity);

    const decrementValue = () => {
        if(counter > 1) {
            setCounter(counter - 1)
        }

    }

    // useEffect(() => {
    //     props.updateCart(counter, props.key);
    // }, [counter])

    // CALCULATE TOTAL ONLY WHEN ADDING BACKEND
    return(
        <div className={classes.CartContents}>
            <img src={props.theImage} />
            <div className={classes.itemDetail}>
                <p className={classes.itemName}>{props.itemName}</p>
                <p className={classes.itemPrice}>$ {props.price}</p>
            </div>
            <div className={classes.CartQuantityContents}>
                <div className={classes.QuantityPicker}>
                    <div onClick={() => (counter > 1) ? setCounter(counter - 1) : counter} className={classes.QuantityPickerDecrement}>-</div>
                    <div onChange={(e) => setCounter(e.target.value)} className={classes.QuantityPickerAmount}>{counter}</div>
                    <div onClick={() => setCounter(counter + 1)} className={classes.QuantityPickerIncrement}>+</div>
                </div>
            </div>
        </div>
    )
}

export default CartContents;