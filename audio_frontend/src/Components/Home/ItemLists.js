import React from "react";
import classes from './ItemLists.module.css';

import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";

import RightArrowIcon from '../../icon-arrow-right.svg';
import HeadphonesThumbnail from '../../image-category-thumbnail-headphones.png';

const ItemList = () => {
    return(
        <div>
            <Container className={classes.ItemsListContainer}>
                <Row>
                    <Col>
                        <div>
                            <div className={classes.ItemsLists}>
                                <div className={classes.ItemsListsInner}>
                                    {/* <img className={classes.ItemsListsThumb} src={HeadphonesThumbnail} /> */}
                                    <h3>Headphones</h3>
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

export default ItemList;