import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { UserAgentProvider } from '@quentin-sommer/react-useragent'
import fromState from 'core/store/selectors';

import Home from 'views/Home';

const App = ({ person }) => {
	return (
		<>
			<UserAgentProvider ua={window.navigator.userAgent}>
				<Home />
			</UserAgentProvider>
		</>
	);
}
export default connect(
	(state) => ({
		person: fromState.Home.getPerson(state),
	}),
	(dispatch) => bindActionCreators({

	}, dispatch),
)(App);

