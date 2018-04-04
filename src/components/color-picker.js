import React, { Component } from 'react';

class ColorPicker extends Component {
  
	constructor(props) {
		super(props);
		this.state = {
			colors: ['red','yellow','blue','green','grey']
		};
	  }

	  setBackground(color) {
	  	return {
			backgroundColor: color
	  	}
	  }
	
	selectColor(color) {
		this.props.selectedColor(color);
	}

	render() {
		var colorElements = this.state.colors.map((color, index) => {
			return <li 
						key={index} 
						style={this.setBackground(color)}
						onClick={() => this.selectColor(color)}
						class={ this.props.getColor === color ? 'active' : '' }
					>
					</li>;
		})

		return (
		  <div className="colorPicker">
			<div class="col-xs-12 col-sm-6">
			  <div class="panel panel-danger">
				<div class="panel-heading">
				  <h3 class="panel-title">Color picker</h3>
				</div>
				<div class="panel-body">
				  <ul className="list-color">
					{colorElements}
				  </ul>
				</div>
			  </div>
			</div>
		  </div>
		);
	}
}

export default ColorPicker;
