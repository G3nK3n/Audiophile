import React, {useEffect, useState} from "react";
import classes from './CartContents.module.css';


const CartContents = (props) => {

    const [counter, setCounter] = useState(props.theQuantity);

    const decrementValue = (theCounter, id) => {
        if(theCounter > 1) {
            let val = theCounter;
            val = val - 1
            setCounter(val)
            props.calculateTotal(val, id);
        }

    }

    const IncrementValue = (theCounter, id) => {
        console.log("Value before incrementing: " + theCounter);

        // Do this intead to update cart right away! Research why....
        let val = theCounter;
        val = val + 1
        // setCounter(theCounter => theCounter + 1);
        setCounter(val);
        console.log("Value after incrementing: " + counter);
        props.calculateTotal(val, id);

    }



    // useEffect(() => {
    //     props.updateCart(counter, props.key);
    // }, [counter])

    return(
        <div className={classes.CartContents}>
            <img src={props.theImage} />
            <div className={classes.itemDetail}>
                <p className={classes.itemName}>{props.itemName}</p>
                <p className={classes.itemPrice}>$ {props.price}</p>
            </div>
            <div className={classes.CartQuantityContents}>
                <div className={classes.QuantityPicker}>
                    <div onClick={() => decrementValue(counter, props.id)} className={classes.QuantityPickerDecrement}>-</div>
                    <div onChange={(e) => console.log(e.target.value)} className={classes.QuantityPickerAmount}>{counter}</div>
                    <div onClick={() => IncrementValue(counter, props.id)} className={classes.QuantityPickerIncrement}>+</div>
                </div>
            </div>
        </div>
    )
}

export default CartContents;