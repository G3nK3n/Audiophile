import React, { useState } from "react";
import Headers from "../../Header/Headers";
import classes from './ZX7.module.css';
import { Row, Col, Button, Container} from "react-bootstrap";

import HeadphonesMKI_Img_Main from '../../../image-category-page-mark_I.jpg'
import Img1 from '../../../image-gallery-ZX7-1.jpg'
import Img2 from '../../../image-gallery-ZX7-2.jpg'
import Img3 from '../../../image-gallery-ZX7-3.jpg'

import ZX7Main from '../../../image-zx7-speaker.jpg';
import HeadphonesXX59_Img from '../../../image-category-page-xx59.jpg';
import SpeakerZX9_Img from '../../../image-category-page-ZX9.jpg';

import RightArrowIcon from '../../../icon-arrow-right.svg';
import HeadphonesThumbnail from '../../../image-category-thumbnail-headphones.png';
import SpeakersThumbnail from '../../../image-category-thumbnail-speakers.png';

import EarphonesThumbnail from '../../../image-category-thumbnail-earphones.png';


import BestGear from '../../../image-best-gear.jpg';

import { Link, useNavigate } from 'react-router-dom';


const ZX7 = () => {

    const [counter, setCounter] = useState(1);

    const decrementValue = () => {
        if(counter > 1) {
            setCounter(counter - 1)
        }
    }

    let navigate = useNavigate();
    const ZX9Route = () => {
        let path = "/speaker/ZX9";
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
                            <img alt="ZX7" src={ZX7Main} />
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.MainDiv}>
                            <h1>ZX7 <br/> SPEAKER</h1>
                            <p className={classes.MainBodyDescription}>
                                Stream high quality sound wirelessly with minimal to no loss.
                                The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.
                            </p>
                            <p className={classes.Price}>$ 3,500</p>
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
                                    Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide.
                                    The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.
                                </p>
                                <p>
                                    The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input.
                                    Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.
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
                                        <li><span>1x</span><p>7.5m Optical Cable</p></li>
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
                            <img src={SpeakerZX9_Img} />
                            <h3>ZX9 Speaker</h3>
                            <form>
                                <Button onClick={ZX9Route}>See Product</Button>
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

export default ZX7;