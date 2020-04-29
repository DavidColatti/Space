import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ScenesImage from './ScenesImage';

class LoggedIn extends Component {
	render() {
		return (
			<div className="LoggedIn">
				<div className="row">
					<div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
						<div className="list-group">
							<ScenesImage />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LoggedIn;
