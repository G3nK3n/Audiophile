import React from "react";
import classes from './Earphones_Lists_Title.module.css';
import Headers from "../Header/Headers";

import Container from "react-bootstrap/Container";
import { Row, Col} from "react-bootstrap";

const Earphones_Lists_Title = () => {
    return(
        <div className={classes.EarphonesOuterDiv}>
            <Headers />
            <Container className={classes.Earphones_ListsContainer}>
                <Row>
                    <Col>
                        <div className={classes.Earphones_Title}>
                            <h1>Earphones</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Earphones_Lists_Title;