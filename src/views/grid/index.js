import React, { Component } from 'react';
import Pad from './pad';

var temp = {
	
	pad_1: {
		'name' : 'Pad Name',
		'url' : 'url'
	},

	pad_2: {
		'name' : 'Pad Name',
		'url' : 'url'
	},
	
	pad_3: {
		'name' : 'Pad Name',
		'url' : 'url'
	},
	
	pad_4: {
		'name' : 'Pad Name',
		'url' : 'url'
	},	

	pad_5: {
		'name' : 'Pad Name',
		'url' : 'url'
	},

	pad_6: {
		'name' : 'Pad Name',
		'url' : 'url'
	},
	
	pad_7: {
		'name' : 'Pad Name',
		'url' : 'url'
	},
	
	pad_8: {
		'name' : 'Pad Name',
		'url' : 'url'
	},

};

console.log(Object.keys);

export default class Grid extends Component {

  getPads(){
    var padKeys = Object.keys(this.props.pads);

    return padKeys.map(function(padId, i){
      return (
          <Pad 
            key={padId} 
            name={this.props.pads[padId]['name']}
            url={this.props.pads[padId]['url']}
          />
        );
    }.bind(this));
  }

  render() {
    var pads = this.getPads();
    return (
      <div className="grid">
        <h3> Grid </h3>
        {pads}
      </div>
    )
  }
}

Grid.defaultProps = {pads: temp};