
import React, { Component } from 'react';

class Result extends Component {
	
	constructor(props) {
      super(props);
    }

	setStyle() {
		return {
			color: this.props.getColor,
			fontSize: this.props.getFont,
			borderColor: this.props.getColor
		}
	}	

	render() {
		return (
			<div className="result">
				<div className="col-xs-12">
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title">Result text</h3>
						</div>
						<div className="panel-body">
							<p className="resultText" style={this.setStyle()}>This is text to display result</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Result;
