import React,{ Component } from 'react';
import './App.css';
import ColorBox from './ColorBox';



class App extends Component {
    constructor(props){
        super(props)
            this.state = {
                elements: []
        }
    }
    
    add = () => {
      let newElements = this.state.elements
      newElements.push([<ColorBox />])
        
      this.setState({elements: newElements})
    }
    
    remove = () => {
      let loseElements = this.state.elements
      loseElements.pop()
      
      this.setState({elements: loseElements})
    }
    
    reset = () => {
      this.setState({elements: []})
    }
    
    render() {
      let { elements } = this.state
      
      return (
        <div class = "buttons">
          <button onClick = {this.add}>Add</button>
          <button onClick = {this.remove}>Delete</button>
          <button onClick = {this.reset}>Reset</button>
          <div className = "container">{elements}</div>
        </div>
      );
    }
}

export default App;
