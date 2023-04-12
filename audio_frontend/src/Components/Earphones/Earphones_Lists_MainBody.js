import React from "react";
import classes from './Earphones_Lists_MainBody.module.css';

import Container from "react-bootstrap/Container";
import { Row, Col, Button} from "react-bootstrap";

import YX1 from '../../image-category-page-YX1.jpg';

import HeadphonesThumbnail from '../../image-category-thumbnail-headphones.png';
import SpeakersThumbnail from '../../image-category-thumbnail-speakers.png';
import EarphonesThumbnail from '../../image-category-thumbnail-earphones.png';
import RightArrowIcon from '../../icon-arrow-right.svg';


const Earphones_Lists_MainBody = () => {
    return(
        <div>
            <Container className={classes.Earphones_MainBody_Container}>
                <Row>
                    <div className={classes.EarphonesSeperator}>
                        <Col>
                            <div className={classes.Earphones}>
                                <img src={YX1} />
                            </div>
                        </Col>
                        <Col>
                            <div className={classes.MainDiv}>
                                <p className={classes.TopTitle}>New Product</p>
                                <h1>YX1 WIRELESS <br/> EARPHONES</h1>
                                <p className={classes.MainBodyDescription}>
                                    Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.
                                    Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
                                </p>
                                <Button>See Product</Button>
                            </div>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <div className={classes.ItemsLists}>
                                <img className={classes.ItemsListsHeadphones} src={HeadphonesThumbnail} />
                                <div className={classes.ItemsListsInner}>
                                    <h3>Headphones</h3>
                                    <a href="#">Shop<img className={classes.ArrowIcon} src={RightArrowIcon} /></a>
                                </div>
                            </div>
                            <div className={classes.ItemsLists}>
                                <img className={classes.ItemsListsSpeakers} src={SpeakersThumbnail} />
                                <div className={classes.ItemsListsInner}>
                                    <h3>Speakers</h3>
                                    <a href="#">Shop<img className={classes.ArrowIcon} src={RightArrowIcon} /></a>
                                </div>
                            </div>
                            <div className={classes.ItemsLists}>
                                <img className={classes.ItemsListsEarphones} src={EarphonesThumbnail} />
                                <div className={classes.ItemsListsInner}>
                                    <h3>Earphones</h3>
                                    <a href="#">Shop<img className={classes.ArrowIcon} src={RightArrowIcon} /></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Earphones_Lists_MainBody;