import React, { useState } from "react";
import Headers from "../../Header/Headers";
import classes from './XX99_Mark_II.module.css';
import { Row, Col, Button, Container} from "react-bootstrap";

import HeadphonesMKII_Img from '../../../image-category-page-preview_mark_II.jpg'
import Img1 from '../../../image-gallery-mark_II_1.jpg'
import Img2 from '../../../image-gallery_mark_II_2.jpg'
import Img3 from '../../../image-gallery_mark_II_3.jpg'

import HeadphonesMKI_Img from '../../../image-category-page-mark_I.jpg';
import HeadphonesXX59_Img from '../../../image-category-page-xx59.jpg';
import SpeakerZX9_Img from '../../../image-category-page-ZX9.jpg';

import RightArrowIcon from '../../../icon-arrow-right.svg';
import HeadphonesThumbnail from '../../../image-category-thumbnail-headphones.png';
import SpeakersThumbnail from '../../../image-category-thumbnail-speakers.png';
import EarphonesThumbnail from '../../../image-category-thumbnail-earphones.png';

import BestGear from '../../../image-best-gear.jpg';

import { Link, useNavigate } from 'react-router-dom';


const X99_Mark_II = () => {

    const [counter, setCounter] = useState(1);

    const decrementValue = () => {
        if(counter > 1) {
            setCounter(counter - 1)
        }
    }

    let navigate = useNavigate();
    const xx99MarkIIRoute = () => {
        let path = "/headphones/xx99MarkII";
        navigate(path);
    }

    const xx99MarkIRoute = () => {
        let path = "/headphones/xx99MarkI";
        navigate(path);
    }

    const xx59Route = () => {
        let path = "/headphones/xx59";
        navigate(path);
    }

    return(
        <div>
            <Container className={classes.Headphones_MainBody_Container}>
                <Row>
                    <Col>
                        <div className={classes.BackLink}>
                            <Link to={"/headphones"}>Go back</Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.Headphones}>
                            <img alt="MKII" src={HeadphonesMKII_Img} />
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
                            <p className={classes.Price}>$ 2,999</p>
                            <div>
                                <div className={classes.QuantityPicker}>
                                    <div onClick={decrementValue} className={classes.QuantityPickerDecrement}>-</div>
                                    <div className={classes.QuantityPickerAmount}>{counter}</div>
                                    <div onClick={() => setCounter(counter + 1)} className={classes.QuantityPickerIncrement}>+</div>
                                </div>
                                <Button>Add to Cart</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className={classes.OuterDivFeaturesBox}>
                        <Col>
                            <div className={classes.Features}>
                                <h2>Features</h2>
                                <p>
                                    Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening.
                                    It includes intuitive controls designed for any situation. 
                                    Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.
                                </p>
                                <p>
                                    The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms.
                                    It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to.
                                    Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className={classes.InTheBox}>
                                <div>
                                    <h2>In the box</h2>
                                    <ul>
                                        <li><span>1x</span><p>Headphone Unit</p></li>
                                        <li><span>2x</span><p>Replacement Earcups</p></li>
                                        <li><span>1x</span><p>User Manual</p></li>
                                        <li><span>1x</span><p>3.5mm 5m Audio Cable</p></li>
                                        <li><span>1x</span><p>Travel Bag</p></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div className={classes.DivOuterImages}>
                        <div className={classes.Images}>
                            <img alt="Gallery_1" src={Img1} />
                            <img alt="Gallery_2" src={Img2} />
                        </div>
                        <img alt="Gallery_3" className={classes.BigImage} src={Img3} />
                    </div>
                </Row>
                <Row>
                    <div className={classes.YouMayAlsoLike}>
                        <h2>You may also like</h2>
                        <div>
                            <img src={HeadphonesMKI_Img} />
                            <h3>XX99 Mark I</h3>
                            <form>
                                <Button onClick={xx99MarkIRoute}>See Product</Button>
                            </form>
                        </div>
                        <div>
                            <img src={HeadphonesXX59_Img} />
                            <h3>XX59</h3>
                            <form>
                                <Button onClick={xx59Route}>See Product</Button>
                            </form>
                        </div>
                        <div>
                            <img src={SpeakerZX9_Img} />
                            <h3>ZX9 Speaker</h3>
                            <form>
                                <Button>See Product</Button>
                            </form>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div>
                        <div className={classes.ItemsLists}>
                            <img className={classes.ItemsListsHeadphones} src={HeadphonesThumbnail} />
                            <div className={classes.ItemsListsInner}>
                                <h3>Headphones</h3>
                                <Link to={"/headphones"}>Shop<img className={classes.ArrowIcon} src={RightArrowIcon} /></Link>
                            </div>
                        </div>
                        <div className={classes.ItemsLists}>
                            <img className={classes.ItemsListsSpeakers} src={SpeakersThumbnail} />
                            <div className={classes.ItemsListsInner}>
                                <h3>Speakers</h3>
                                <Link to={"/speakers"}>Shop<img className={classes.ArrowIcon} src={RightArrowIcon} /></Link>
                            </div>
                        </div>
                        <div className={classes.ItemsLists}>
                            <img className={classes.ItemsListsEarphones} src={EarphonesThumbnail} />
                            <div className={classes.ItemsListsInner}>
                                <h3>Earphones</h3>
                                <Link to={"/earphones"}>Shop<img className={classes.ArrowIcon} src={RightArrowIcon} /></Link>
                            </div>
                        </div>
                    </div>
                </Row>
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
                            <img src={BestGear} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default X99_Mark_II;