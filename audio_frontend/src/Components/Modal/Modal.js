import React, {useState} from "react";
import classes from './Modal.module.css';
import CartContents from './CartContents';

import Img1 from '../../CART-image-xx99-mark-two-headphones.jpg';
import Img2 from '../../CART-image-xx59-headphones.jpg';
import Img3 from '../../CART-image-yx1-earphones.jpg';

import { Link } from 'react-router-dom';

const Modal = (props) => {


    let DUMMY_CART=[
        {
            id: 1, 
            name: "XX99_MK_II", 
            price: 2999,
            image: Img1
        },
        {
            id: 2, 
            name: "XX59", 
            price: 899,
            image: Img2
        },
        {
            id: 3, 
            name: "YX1", 
            price: 2999,
            image: Img3
        }

    ]

    //Initialized the DUMMY_CART for now...
    const [cartList, setCartList] = useState(DUMMY_CART);

    const calculateTotal = () => {
        let totalAmount=0;

        totalAmount = cartList.reduce((previousValue, nextValue) => previousValue + nextValue.price, 0);

        return totalAmount;
    }

    const removeAllItems = () => {
        const newList = cartList.filter((item) => item === 0);
        setCartList(newList);
    }

    return(
        <div>
            <div className={classes.Backdrop} onClick={props.closeCart}></div>
            <div className={classes.Modal}>
                <div>
                    <p className={classes.CartTitle}>CART ({cartList.length})</p>
                    <p className={classes.RemoveAllButton} onClick={removeAllItems}>Remove all</p>
                    {/* This is a dummy test */}
                    <div className={classes.CartAmount}>
                        {cartList.map((cartContents) => {
                            return(
                                <CartContents key={cartContents.id} theImage={cartContents.image} itemName={cartContents.name} price={cartContents.price}/>
                            )
                        })}
                    </div>
                    <div>
                        <p className={classes.theTotalTitle}>TOTAL</p>
                        <p className={classes.theTotalAmount}>$ {calculateTotal()}</p>
                        {/* Figure out how to remove cart when going to another page */}
                        <Link onClick={props.closeCart} to={"/checkout"}><p className={classes.CheckoutButton}>CHECKOUT</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;