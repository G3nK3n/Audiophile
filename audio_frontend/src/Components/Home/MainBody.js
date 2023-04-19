import React from "react";
import classes from './MainBody.module.css';

import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";

import Headers from "../Header/Headers";

import Img1 from '../../image-header.jpg';


const MainBody = () => {
    return(
        <div className={classes.MainBody}>
            <Headers />
            <Container className={classes.HomeContainer}> 
                <Row>
                    <Col>
                        <div className={classes.MainDiv}>
                            <p className={classes.TopTitle}>New Product</p>
                            <h1>XX99 MARK II <br/> HEADPHONES</h1>
                            <p className={classes.MainBodyDescription}>
                                Experience natural, lifelike audio and exceptional build quality
                                made for the passionate music enthusiast.
                            </p>
                            <Button>See Product</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainBody;