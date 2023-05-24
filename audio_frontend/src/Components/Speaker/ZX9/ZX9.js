import React, { useState } from "react";
import Headers from "../../Header/Headers";
import classes from './ZX9.module.css';
import { Row, Col, Button, Container} from "react-bootstrap";

import HeadphonesMKI_Img_Main from '../../../image-category-page-mark_I.jpg'
import Img1 from '../../../image-gallery-ZX9-1.jpg'
import Img2 from '../../../image-gallery-ZX9-2.jpg'
import Img3 from '../../../image-gallery-ZX9-3.jpg'

import ZX7 from '../../../image-zx7-speaker.jpg';
import HeadphonesXX59_Img from '../../../image-category-page-xx59.jpg';
import SpeakerZX9_Img from '../../../image-category-page-ZX9.jpg';

import RightArrowIcon from '../../../icon-arrow-right.svg';
import HeadphonesThumbnail from '../../../image-category-thumbnail-headphones.png';
import SpeakersThumbnail from '../../../image-category-thumbnail-speakers.png';

import EarphonesThumbnail from '../../../image-category-thumbnail-earphones.png';


import BestGear from '../../../image-best-gear.jpg';

import { Link, useNavigate } from 'react-router-dom';


const ZX9 = () => {

    const [counter, setCounter] = useState(1);

    const decrementValue = () => {
        if(counter > 1) {
            setCounter(counter - 1)
        }
    }

    let navigate = useNavigate();
    const ZX7Route = () => {
        let path = "/speaker/ZX7";
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
                            <img alt="ZX9" src={SpeakerZX9_Img} />
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.MainDiv}>
                            <p className={classes.TopTitle}>New Product</p>
                            <h1>ZX9 <br/> SPEAKER</h1>
                            <p className={classes.MainBodyDescription}>
                                Upgrade your sound system with the all new ZX9 active speaker.
                                It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
                            </p>
                            <p className={classes.Price}>$ 4,500</p>
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
                                    Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs,
                                    allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).
                                </p>
                                <p>
                                    Discover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit.
                                    You'll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className={classes.InTheBox}>
                                <div>
                                    <h2>In the box</h2>
                                    <ul>
                                        <li><span>2x</span><p>Speaker Unit</p></li>
                                        <li><span>2x</span><p>Speaker Cloth Panel</p></li>
                                        <li><span>1x</span><p>User Manual</p></li>
                                        <li><span>1x</span><p>3.5mm 10m Audio Cable</p></li>
                                        <li><span>1x</span><p>10m Optical Cable</p></li>
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
                            <img src={ZX7} />
                            <h3>ZX7 Speaker</h3>
                            <form>
                                <Button onClick={ZX7Route}>See Product</Button>
                            </form>
                        </div>
                        <div>
                            <img src={HeadphonesMKI_Img_Main} />
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

export default ZX9;