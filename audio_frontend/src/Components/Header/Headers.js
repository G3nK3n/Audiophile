import React, { useState } from "react";
import classes from './Headers.module.css';

import { Row, Col, Container } from "react-bootstrap";

import Img1 from '../../logo.svg';
import Cart from '../../icon-cart.svg';

import { Link } from 'react-router-dom';

const Headers = (props) => {

    return(
        <div className={classes.OuterHeader}>
            <Container className={classes.HeaderContainer}>
                <Row>
                    <Col>
                        <div className={classes.HeaderDiv}>
                            <div className={classes.Logo}> 
                                <Link to={"/"}><img src={Img1} /></Link>
                            </div>
                            <div className={classes.Links}>
                                <ul>
                                    {/* The onClick combined with the Link router will close the cart if its open when redirecting to another page */}
                                    <li><Link onClick={props.closeCart} to={"/"}>Home</Link></li>
                                    <li><Link onClick={props.closeCart} to={"/headphones"}>Headphones</Link></li>
                                    <li><Link onClick={props.closeCart} to={"/speakers"}>Speakers</Link></li>
                                    <li><Link onClick={props.closeCart} to={"/earphones"}>Earphones</Link></li>
                                </ul>
                            </div>
                            <div className={classes.Cart} onClick={props.cart}>
                                <img src={Cart} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Headers;