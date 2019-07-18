import React, { Component } from 'react';
import ColorBox from './ColorBox';

export default class AddButton extends Component {
    constructor(props){
        super(props)
            this.state = {
                elements: [<ColorBox />]
        }
    }
    
    add = () => {
        let newElements = this.state.elements
        newElements.push(<ColorBox />)
        
        this.setState({elements: newElements})
    }
    
    render() {
        let { elements } = this.state
        
      return(
          <div class = "buttons">
            <button onClick = {this.add}>Add</button>
          </div>
      )
    }
}