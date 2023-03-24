import React from "react";
import classes from './ItemLists.module.css';

import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";

import RightArrowIcon from '../../icon-arrow-right.svg';
import HeadphonesThumbnail from '../../image-category-thumbnail-headphones.png';
import SpeakersThumbnail from '../../image-category-thumbnail-speakers.png';
import EarphonesThumbnail from '../../image-category-thumbnail-earphones.png';
import ZX9 from '../../image-speaker-zx9.png';

const ItemList = () => {
    return(
        <div>
            <Container className={classes.ItemsListContainer}>
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
                <Row>
                    <Col>
                        <div className={classes.ZX9SpeakerSection}>
                            <img src={ZX9} className={classes.ZX9Image}/>
                            <div className={classes.ZX9Description}>
                                <h1>ZX9 Speaker</h1>
                                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                                <Button>See Product</Button>
                            </div>
                        </div>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.ZX7SpeakerSection}>
                            <div className={classes.ZX7Speaker}>
                                <h2>ZX7 Speaker</h2>
                                <Button>See Product</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ItemList;