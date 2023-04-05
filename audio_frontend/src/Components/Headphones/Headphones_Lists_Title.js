import React from "react";
import classes from './Headphones_Lists_Title.module.css';

import Container from "react-bootstrap/Container";
import { Row, Col} from "react-bootstrap";
import MarkII from '../../image-category-page-preview_mark_II.jpg';

import Headers from "../Header/Headers";


const Headphones_Lists = () => {
    return(
        <div className={classes.HeadphonesOuterDiv}>
            <Container className={classes.Headphones_ListsContainer}>
                <Headers />
                <Row>
                    <Col>
                        <div className={classes.Headphones_Title}>
                            <h1>Headphones</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Headphones_Lists;