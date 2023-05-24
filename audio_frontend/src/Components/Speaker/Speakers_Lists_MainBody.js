import React from "react";

import classes from './Speakers_Lists_MainBody.module.css';

import Container from "react-bootstrap/Container";
import { Row, Col, Button} from "react-bootstrap";

import ZX7 from '../../image-category-page-ZX7.jpg';
import ZX9 from '../../image-category-page-ZX9.jpg';

import HeadphonesThumbnail from '../../image-category-thumbnail-headphones.png';
import SpeakersThumbnail from '../../image-category-thumbnail-speakers.png';
import EarphonesThumbnail from '../../image-category-thumbnail-earphones.png';
import RightArrowIcon from '../../icon-arrow-right.svg';

import { useNavigate } from 'react-router-dom';

const Speakers_Lists_MainBody = () => {

    let navigate = useNavigate();
    const ZX9Route = () => {
        let path = "/speaker/ZX9";
        navigate(path);
    }

    const ZX7Route = () => {
        let path = "/speaker/ZX7";
        navigate(path);
    }


    return(
        <div>
            <Container className={classes.Speakers_MainBody_Container}>
                <Row>
                    <div className={classes.SpeakersSeperator}>
                        <Col>
                            <div className={classes.Speakers}>
                                <img src={ZX9} />
                            </div>
                        </Col>
                        <Col>
                            <div className={classes.MainDiv}>
                                <p className={classes.TopTitle}>New Product</p>
                                <h1>ZX9 <br/> SPEAKER</h1>
                                <p className={classes.MainBodyDescription}>
                                    Upgrade your sound system with the all new ZX9 active speaker.
                                    It's a bookshelf speaker system that offers truly wireless connectivity - creating new possibilities for more pleasing and practical audio setups.
                                </p>
                                <Button onClick={ZX9Route}>See Product</Button>
                            </div>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div className={classes.SpeakersSeperator}>
                        <Col>
                            <div className={classes.MainDivOpposite}>
                                <h1>ZX7 <br/> SPEAKER</h1>
                                <p className={classes.MainBodyDescription}>
                                    Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile that 
                                    represents the top of the line powered speakers for home or studio use.
                                </p>
                                <Button onClick={ZX7Route}>See Product</Button>
                            </div>
                        </Col>
                        <Col>
                            <div className={classes.Speakers}>
                                <img src={ZX7} />
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

export default Speakers_Lists_MainBody;