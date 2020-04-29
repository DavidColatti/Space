import React, { Component } from 'react';
import MeditateList from './MeditateList';

class Meditate extends Component {
	render() {
		return (
			<div className="Meditate">
				<div className="row">
					<div className="col-5" style={{ maxHeight: '100vh', overflow: 'scroll' }}>
						<div className="list-group">
							<MeditateList />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Meditate;
