import React from "react";
import classes from './Headphones_Lists_MainBody.module.css';

import Container from "react-bootstrap/Container";
import { Row, Col, Button} from "react-bootstrap";

import HeadphonesMKII_Img from '../../image-category-page-preview_mark_II.jpg'
import HeadphonesMKI_Img from '../../image-category-page-mark_I.jpg';
import XX59_Img from '../../image-category-page-xx59.jpg';

import HeadphonesThumbnail from '../../image-category-thumbnail-headphones.png';
import SpeakersThumbnail from '../../image-category-thumbnail-speakers.png';
import EarphonesThumbnail from '../../image-category-thumbnail-earphones.png';
import RightArrowIcon from '../../icon-arrow-right.svg';

import { Link, useNavigate } from 'react-router-dom';


const Headphones_Lists_MainBody = () => {

    let navigate = useNavigate();
    const xx99MarkIIRoute = () => {
        let path = "/headphones/xx99MarkII";
        navigate(path);
    }

    const xx99MarkIRoute = () => {
        let path = "/headphones/xx99MarkI";
        navigate(path);
    }

    return(
        <div>
            <Container className={classes.Headphones_MainBody_Container}>
                <Row>
                    <div className={classes.HeadphonesSeperator}>
                        <Col>
                            <div className={classes.Headphones}>
                                <img src={HeadphonesMKII_Img} />
                            </div>
                        </Col>
                        <Col>
                            <div className={classes.MainDiv}>
                                <p className={classes.TopTitle}>New Product</p>
                                <h1>XX99 MARK II <br/> HEADPHONES</h1>
                                <p className={classes.MainBodyDescription}>
                                    The new XX99 Mark II headphones is the pinnacle of pristine audio.
                                    It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
                                </p>
                                <Button onClick={xx99MarkIIRoute}>See Product</Button>
                            </div>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div className={classes.HeadphonesSeperator}>
                        <Col>
                            <div className={classes.MainDivOpposite}>
                                <h1>XX99 MARK I <br/> HEADPHONES</h1>
                                <p className={classes.MainBodyDescription}>
                                    As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for
                                    audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
                                </p>
                                <Button onClick={xx99MarkIRoute}>See Product</Button>
                            </div>
                        </Col>
                        <Col>
                            <div className={classes.Headphones}>
                                <img src={HeadphonesMKI_Img} />
                            </div>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div className={classes.HeadphonesSeperator}>
                        <Col>
                            <div className={classes.Headphones}>
                                <img src={XX59_Img} />
                            </div>
                        </Col>
                        <Col>
                            <div className={classes.MainDiv}>
                                <h1>XX59 <br/> HEADPHONES</h1>
                                <p className={classes.MainBodyDescription}>
                                    Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones.
                                    The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
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

export default Headphones_Lists_MainBody;