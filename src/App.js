import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/color-picker.js';
import Result from './components/result.js';
import SizeSelect from './components/size-select.js';

class App extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        color: 'red',
        fontSize: 14
      };
    }

  getColor = (color) => {
    this.setState({
      color : color,
    });
  }

  passSizeToParent = (size) => {

    this.setState({
      fontSize : size,
    });
  }

  render() {
    return (
      <div id="App">
         <div className="container">
           <div className="row">
              <ColorPicker 
                selectedColor={this.getColor} 
                getColor={this.state.color} 
              />
              <SizeSelect 
                getFont={this.state.fontSize}
                setFontsize={this.passSizeToParent}
              />
           </div>
          <div className="row">
            <Result 
              getColor={this.state.color}
              getFont={this.state.fontSize}
            >
            </Result>
          </div>
         </div>
      </div>
    );
  }
}

export default App;
