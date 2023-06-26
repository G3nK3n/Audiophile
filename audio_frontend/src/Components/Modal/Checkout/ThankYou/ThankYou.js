import React, { useState } from "react";
import classes from './ThankYou.module.css';
import CheckMark from '../../../../icon-order-confirmation.svg';

import { Link } from 'react-router-dom';


const ThankYou = (props) => {
    
    const [viewMoreButton, setViewMoreButton] = useState(false);

    const clickViewMore = () => {
        setViewMoreButton(!viewMoreButton);
    }

    return(
        <div>
            <div onClick={props.showThanks} className={classes.Backdrop}></div>
            <div className={classes.ThankYouBox}>
                <img src={CheckMark} />
                <h1>THANK YOU <br/> FOR YOUR ORDER</h1>
                <p className={classes.ThankYouBoxP}>You will receive an email confirmation shortly.</p>
                <div className={classes.itemsList}>
                    {/* TEMP UNTIL WE GET DATABASE */}
                    { viewMoreButton ? props.getCartContent().map((content) => {
                        return(
                            <div className={classes.outerItemDetails}>
                                <img className={classes.itemImage} src={content.image} />
                                <div className={classes.itemDetail}>
                                    <p className={classes.itemName}>{content.name}</p>
                                    <p className={classes.itemPrice}>$ {content.price}</p>
                                </div>
                                <p className={classes.getQuantity}>x{content.quantity}</p> 
                            </div>
                        )
                    }): 
                        <div className={classes.outerItemDetails}>
                            <img className={classes.itemImage} src={props.getCartContent()[0].image} />
                            <div className={classes.itemDetail}>
                                <p className={classes.itemName}>{props.getCartContent()[0].name}</p>
                                <p className={classes.itemPrice}>$ {props.getCartContent()[0].price}</p>
                            </div>
                            <p className={classes.getQuantity}>x{props.getCartContent()[0].quantity}</p> 
                        </div>
                    }
                    <hr />
                    <p onClick={clickViewMore} className={classes.moreOrLess}>{viewMoreButton ? 'View less' : 'View more'}</p>
                </div>
                <div className={classes.GrandTotalSection}>
                    <h5>Grand Total</h5>
                    <p>$ 5,446 </p>
                </div>
                <Link to={"/"}><p className={classes.PayButton}>BACK TO HOME</p></Link>
            </div>
        </div>
    )
}

export default ThankYou;