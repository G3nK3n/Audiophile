import React from "react";
import classes from './BottomSection.module.css';

import Container from "react-bootstrap/Container";
import { Row, Col} from "react-bootstrap";

import Img1 from '../../image-best-gear.jpg';

const BottomSection = () => {
    return(
        <div>
            <Container className={classes.BottomSectionContainer}>
                <Row>
                    <Col>
                        <div className={classes.BottomSectionDiv}>
                            <div className={classes.BottomSectionDescription}>
                                <h1>Bringing you the <span>best</span> audio gear</h1>
                                <p>
                                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
                                    We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products.
                                    Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.ImageBestGear}>
                            <img src={Img1} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BottomSection;