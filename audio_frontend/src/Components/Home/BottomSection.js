import React from "react";
import classes from './BottomSection.module.css';

import Container from "react-bootstrap/Container";
import { Row, Col} from "react-bootstrap";

const BottomSection = () => {
    return(
        <div>
            <Container className={classes.BottomSectionContainer}>
                <Row>
                    <Col>
                        <div>
                            <h1>Helllo</h1>
                        </div>
                    </Col>
                    <Col>
                        <div>

                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default BottomSection;