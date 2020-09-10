import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faPlus,faMinus,faRedoAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faPlus,faMinus,faRedoAlt)



class App extends Component{
  constructor(props){
    super(props);
    this.state={
      counter:0,
    };
  }
  plusHandle(){
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  minusHandle(){
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  resetHandle(){
    this.setState({
      counter: 0,
    });
  }
  render()
  {
    return(
      <div className="App">
          <h1 className="count">{this.state.counter}</h1>
          <button type="submit" className="plus" onClick={() => {this.plusHandle();}}>
          <FontAwesomeIcon className="fa-2x" icon="plus"></FontAwesomeIcon>
          </button>
          <button type="submit" className="minus" onClick={() => {this.minusHandle();}}>
          <FontAwesomeIcon className="fa-2x" icon="minus"></FontAwesomeIcon>
          </button>
          <button type="submit" className="reset" onClick={() => {this.resetHandle();}}>
          <FontAwesomeIcon className="fa-2x" icon="redo-alt"></FontAwesomeIcon>
          </button>
      </div>
    );
  }
}
   
export default App;
