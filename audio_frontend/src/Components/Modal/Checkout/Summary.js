import React, {useEffect, useState} from "react";
import classes from './Summary.module.css';
import SummaryContents from "./SummaryContents";

import {Row, Col} from 'react-bootstrap';

import Img1 from '../../../CART-image-xx99-mark-two-headphones.jpg';
import Img2 from '../../../CART-image-xx59-headphones.jpg';
import Img3 from '../../../CART-image-yx1-earphones.jpg';

import { Link } from 'react-router-dom';

const Summary = (props) => {


    let DUMMY_CART=[
        {
            id: 1, 
            name: "XX99_MK_II", 
            price: 2999,
            quantity: 1,
            image: Img1
        },
        {
            id: 2, 
            name: "XX59", 
            price: 899,
            quantity: 1,
            image: Img2
        },
        {
            id: 3, 
            name: "YX1", 
            price: 2999,
            quantity: 1,
            image: Img3
        }

    ]

    //Initialized the DUMMY_CART for now...
    const [cartList, setCartList] = useState(DUMMY_CART);
    const [grandTotal, setGrandTotal] = useState(0);

    const shipping = 50;
    const VAT = 1079;

    useEffect(() => {
        calculateGrandTotal();
    }, [])

    const calculateTotal = () => {
        let totalAmount=0;

        totalAmount = cartList.reduce((previousValue, nextValue) => previousValue + nextValue.price, 0);

        return totalAmount;
    }

    const calculateGrandTotal = () => {
        let theTotalAmount = calculateTotal();
        let theGrandTotal = theTotalAmount + shipping + VAT;
        setGrandTotal(theGrandTotal);
    }

    // const removeAllItems = () => {
    //     const newList = cartList.filter((item) => item === 0);
    //     setCartList(newList);
    // }

    return(
        <div>
            <div className={classes.SummarySection}>
                <div>
                    <p className={classes.SummaryTitle}>SUMMARY</p>
                    {/* <p className={classes.RemoveAllButton} onClick={removeAllItems}>Remove all</p> */}
                    {/* This is a dummy test */}
                    <div className={classes.SummaryAmount}>
                        {cartList.map((cartContents) => {
                            return(
                                <SummaryContents key={cartContents.id} getQuantity={cartContents.quantity} theImage={cartContents.image} itemName={cartContents.name} price={cartContents.price}/>
                            )
                        })}
                    </div>
                    <Row>
                        <Col>
                            <div>
                                <p className={classes.theTotalTitle}>TOTAL</p>
                                <p className={classes.theShippingTitle}>SHIPPING</p>
                                <p className={classes.theVATTitle}>VAT (INCLUDED)</p>
                                <p className={classes.theGrandTotalTitle}>GRAND TOTAL</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <p className={classes.theTotalAmount}>$ {calculateTotal()}</p>
                                <p className={classes.theShippingAmount}>$ {shipping}</p>
                                <p className={classes.theVATAmount}>$ {VAT}</p>
                                <p className={classes.theGrandTotalAmount}>$ {grandTotal}</p>
                            </div>
                        </Col>
                    </Row>
                    <Link onClick={props.closeCart} to={"#"}><p className={classes.PayButton}>CONTINUE AND PAY</p></Link>
                    
                    {/* <div>
                        <p className={classes.theTotalTitle}>TOTAL</p>
                        <p className={classes.theTotalAmount}>$ {calculateTotal()}</p>
                    </div>
                    <div>
                        <p className={classes.theTotalTitle}>TOTAL</p>
                        <p className={classes.theTotalAmount}>$ {calculateTotal()}</p>  
                    </div>
                    <Link to={"#"}><p className={classes.CheckoutButton}>CONTINUE & PAY</p></Link> */}
                </div>
            </div>
        </div>
    )
}

export default Summary;