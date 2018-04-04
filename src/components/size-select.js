import React, { Component } from 'react';

class SizeSelect extends Component {
  
	constructor(props) {
		super(props);
		this.state = {
			fontSize: 0
		}
	}
	componentDidMount() {
		this.setState({
			fontSize : this.props.getFont
		});
 	}

	changeFontSize(calculated) {
		if(this.state.fontSize > 10 && calculated === 'decrease' ) {
			this.setState({
				fontSize : this.state.fontSize-=1
			})
		}
		else if(this.state.fontSize < 30 && calculated === 'increase') {
			this.setState({
				fontSize : this.state.fontSize+=1
			})
		}
		this.props.setFontsize(this.state.fontSize);
	}

	render() {
		return (
		  <div className="sizeSelect">
			<div className="col-xs-12 col-sm-6">
				<div className="panel panel-success">
					<div className="panel-heading">
						<h3 className="panel-title">Up down size text</h3>
					</div>
					<div className="panel-body">
						<button type="button" onClick={() =>this.changeFontSize('increase')} className="btn btn-info">Plus</button> 
						<button type="button" onClick={() =>this.changeFontSize('decrease')}  className="btn btn-info">Minus</button>
					</div>
				</div>
			</div>
		  </div>
		);
	}
}

export default SizeSelect;
