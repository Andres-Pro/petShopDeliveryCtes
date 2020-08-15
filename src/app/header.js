import React from 'react';
import {
    Media,
    Navbar,
    NavLink,
    Container,
    Row,
    Col
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = ({user}) => {
    return (
        <>
            <header className="bg">
                <Container className="p-0 m-0  ml-auto mr-auto">
                    <Row className="p-0 m-0">
                        <Col className="p-0 m-2">
                            <Navbar expand="md" className="p-0 m-0">
                                <NavLink
                                    tag={Link}
                                    className="logo"
                                    to="/"
                                >
                                    <Media alt="aaaa" src="https://images.clarin.com/collections/static/ultimas-noticias-de-argentina-y-el-mundo-clarin.svg" />
                                </NavLink>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
};

export default Header;
