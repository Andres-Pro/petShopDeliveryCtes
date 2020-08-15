import React from 'react';
import { Row, Col, Container } from 'reactstrap';

const Footer = ({child}) => {
    return (
        <footer>
            <Container>
                <Row className="padding-top">
                    <Col>
                        <p className="text-white text-center mt-4">
                            {child}
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
export default Footer;
