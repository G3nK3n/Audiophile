import React, { useState } from "react";
import Headers from "../../Header/Headers";
import classes from './XX59.module.css';
import { Row, Col, Button, Container} from "react-bootstrap";

import HeadphonesMKI_Img_Main from '../../../image-category-page-mark_I.jpg'
import Img1 from '../../../image-gallery-XX59-1.jpg'
import Img2 from '../../../image-gallery-XX59-2.jpg'
import Img3 from '../../../image-gallery-XX59-3.jpg'

import HeadphonesMKII_Img from '../../../image-category-page-preview_mark_II.jpg';
import HeadphonesXX59_Img from '../../../image-category-page-xx59.jpg';
import SpeakerZX9_Img from '../../../image-category-page-ZX9.jpg';

import RightArrowIcon from '../../../icon-arrow-right.svg';
import HeadphonesThumbnail from '../../../image-category-thumbnail-headphones.png';
import SpeakersThumbnail from '../../../image-category-thumbnail-speakers.png';
import EarphonesThumbnail from '../../../image-category-thumbnail-earphones.png';

import BestGear from '../../../image-best-gear.jpg';

import { Link, useNavigate } from 'react-router-dom';


const XX59 = () => {

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
                            <img alt="XX59" src={HeadphonesXX59_Img} />
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.MainDiv}>
                            <h1>XX59 <br/> HEADPHONES</h1>
                            <p className={classes.MainBodyDescription}>
                                Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones.
                                The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move. 
                            </p>
                            <p className={classes.Price}>$ 899</p>
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
                                    These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel.
                                    Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.
                                </p>
                                <p>
                                    More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups.
                                    Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.
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
                            <img src={HeadphonesMKII_Img} />
                            <h3>XX99 Mark II</h3>
                            <form>
                                <Button onClick={xx99MarkIIRoute}>See Product</Button>
                            </form>
                        </div>
                        <div>
                            <img src={HeadphonesMKI_Img_Main} />
                            <h3>XX99 MARK I</h3>
                            <form>
                                <Button onClick={xx99MarkIRoute}>See Product</Button>
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

export default XX59;