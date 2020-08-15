import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Lightbox } from 'primereact/lightbox';
import {
	Container, Row, Col, CardTitle, CardText, Button
} from 'reactstrap';

import Footer from 'app/footer'
import Header from 'app/header'
import map from 'lodash/map'
import get from 'lodash/get'
import upperFirst from 'lodash/upperFirst'

import fromState from 'core/store/selectors';
import { submitInformationRequested } from 'core/store/actions'

const Home = ({ person, user, submitInformationRequested }) => {
	const handleClick = () => {return submitInformationRequested();}
	return (
		<>
            <Header user={user}/>
			<Container className="root mt-4 mb-4">
                <Row>
                    <Col className="float-right">
                        <Button onClick={handleClick} color="danger" className="float-right">Send Context Data</Button>
                    </Col>
                </Row>
				<Row>
					<Col xs="12" md="3" sm="6">
						<img width='250' height='250' alt='profile_imagen' src={get(person, 'profile_image')} ></img>
					</Col>
					{map(get(person, 'data'), item => (
						<Col className="person-info p-4" xs="12" md="3" sm="6" >
							<CardTitle>{get(item, 'title')}</CardTitle>
							{map(get(item, 'data'), i => (
								<CardText>{upperFirst(i)}</CardText>
							))}
						</Col>
					))}
				</Row>
				<Row className="mt-4">
					<Col>
						<p className="text-justify">
							{get(person, 'description')}
						</p>
					</Col>
				</Row>
				<Row className="mt-4">
					<Col>
						<iframe title="video" style={{ width: 'inherit' }} height='400' src={get(person, 'video_url')} frameBorder="0" allowFullScreen></iframe>
					</Col>
				</Row>
				<Row className="mt-4">
					<Col className="d-flex justify-content-center">
						<div className="lightbox-demo">
							<Lightbox images={get(person, 'images')} />
						</div>
					</Col>
				</Row>
			</Container>
            <Footer />
		</>
	);
}
export default connect(
	(state) => ({
		person: fromState.Home.getPerson(state),
		user: state.home.information.fingerprint
	}),
	(dispatch) => bindActionCreators({
		submitInformationRequested,
	}, dispatch),
)(Home);

