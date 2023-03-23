import React from "react";
import classes from './ItemLists.module.css';

import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";

import RightArrowIcon from '../../icon-arrow-right.svg';
import HeadphonesThumbnail from '../../image-category-thumbnail-headphones.png';
import SpeakersThumbnail from '../../image-category-thumbnail-speakers.png';
import EarphonesThumbnail from '../../image-category-thumbnail-earphones.png';

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

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ItemList;