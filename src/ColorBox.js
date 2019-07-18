import React, { Component } from 'react';

export default class ColorBox extends Component {
    constructor(props){
        super(props)
          this.state = {
              color: 'white'
          }
    }
    
    colorChange = () => {
        let newColor = this.state.color
        let colors = ['white', 'green', 'blue', 'yellow', 'red', 'purple', 'orange']
        
        if(newColor === 'orange'){
            newColor = 'white'
        } else {
        newColor = colors[colors.indexOf(this.state.color) + 1]
        }
        
        this.setState({color: newColor})
    }
    
    
    render() {
        let {color} = this.state
        
      return(
            <div id='box'>
                <div id='text' style = {{backgroundColor: color}} onClick = {this.colorChange}>{color}</div>
            </div>
      );
    }
}