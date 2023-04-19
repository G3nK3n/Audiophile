import React from "react";
import classes from './Speakers_Lists_Title.module.css';
import Headers from "../Header/Headers";

import Container from "react-bootstrap/Container";
import { Row, Col, Button} from "react-bootstrap";

const Speakers_Lists_Title = () => {
    return(
        <div className={classes.SpeakersOuterDiv}>
            <Headers />
            <Container className={classes.Speakers_ListsContainer}>
                <Row>
                    <Col>
                        <div className={classes.Speakers_Title}>
                            <h1>Speakers</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Speakers_Lists_Title;