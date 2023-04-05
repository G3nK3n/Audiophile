import React from "react";
import classes from './Footer.module.css';

import Container from "react-bootstrap/Container";
import { Row, Col} from "react-bootstrap";

import Logo from '../../logo.svg';

import FB from '../../icon-facebook.svg';
import IG from '../../icon-instagram.svg';
import TW from '../../icon-twitter.svg';

const Footer = () => {
    return(
        <div className={classes.FooterOuterDiv}>
            <Container className={classes.FooterContainer}>
                <Row>
                    <Col>
                        <div>
                            <a href="#"><img src={Logo} /></a>
                            <p className={classes.FooterDescription}>
                                Audiophile is an all in one stop to fulfill your audio needs.
                                We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio.
                                Come visit our demo facility - we're open 7 days a week.
                            </p>
                            <p className={classes.Copyright}>
                                Copyright 2021. All Rights Reserved
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <div className={classes.Links}>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Headphones</a></li>
                                    <li><a href="#">Speakers</a></li>
                                    <li><a href="#">Earphones</a></li>
                                </ul>
                            </div>
                            <div className={classes.Socials}>
                                <ul>
                                    <li><img src={FB} /></li>
                                    <li><img src={TW} /></li>
                                    <li><img src={IG} /></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;