import React from "react";
import classes from './Headers.module.css';

import { Row, Col } from "react-bootstrap";

import Img1 from '../../logo.svg';
import Cart from '../../icon-cart.svg';

const Headers = () => {
    return(
        <div>
            <Row>
                <Col>
                    <div className={classes.HeaderDiv}>
                        <div className={classes.Logo}> 
                            <img src={Img1} />
                        </div>
                        <div className={classes.Links}>
                            <ul>
                                <li>Home</li>
                                <li>Headphones</li>
                                <li>Speakers</li>
                                <li>Earphones</li>
                            </ul>
                        </div>
                        <div className={classes.Cart}>
                            <a href="#"><img src={Cart} /></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Headers;