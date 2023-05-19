import React, { useState } from "react";
import Headers from "../../Header/Headers";
import classes from './XX99_Mark_I.module.css';
import { Row, Col, Button, Container} from "react-bootstrap";

import HeadphonesMKI_Img_Main from '../../../image-category-page-mark_I.jpg'
import Img1 from '../../../image-gallery-Mark-I-1.jpg'
import Img2 from '../../../image-gallery-Mark-I-2.jpg'
import Img3 from '../../../image-gallery-Mark-I-3.jpg'

import HeadphonesMKII_Img from '../../../image-category-page-preview_mark_II.jpg';
import HeadphonesXX59_Img from '../../../image-category-page-xx59.jpg';
import SpeakerZX9_Img from '../../../image-category-page-ZX9.jpg';

import RightArrowIcon from '../../../icon-arrow-right.svg';
import HeadphonesThumbnail from '../../../image-category-thumbnail-headphones.png';
import SpeakersThumbnail from '../../../image-category-thumbnail-speakers.png';
import EarphonesThumbnail from '../../../image-category-thumbnail-earphones.png';

import BestGear from '../../../image-best-gear.jpg';

import { Link } from 'react-router-dom';


const X99_Mark_I = () => {

    const [counter, setCounter] = useState(1);

    const decrementValue = () => {
        if(counter > 1) {
            setCounter(counter - 1)
        }
    }

    return(
        <div>
            <div className={classes.Headers}>
                <Headers />
            </div>
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
                            <img alt="MKII" src={HeadphonesMKI_Img_Main} />
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.MainDiv}>
                            <h1>XX99 MARK I <br/> HEADPHONES</h1>
                            <p className={classes.MainBodyDescription}>
                                As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles,
                                mixing engineers, and music aficionados alike in studios and on the go. 
                            </p>
                            <p className={classes.Price}>$ 1,750</p>
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
                                    As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience.
                                    This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.
                                </p>
                                <p>
                                    From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation,
                                    reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.
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
                                <Button>See Product</Button>
                            </form>
                        </div>
                        <div>
                            <img src={HeadphonesXX59_Img} />
                            <h3>XX59</h3>
                            <form>
                                <Button>See Product</Button>
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

export default X99_Mark_I;