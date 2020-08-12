import React, { Component } from 'react';
import './App.css';
import List from './components/List';

class App extends Component {
  constructor(){
    super();
    this.list = [
      {row1: 'Item1', row2: 'Item2', row3: 'Item3', isRender: true}
    ];
  }

  render(){
    return (
      <div className="App">
        <p>Use conditional rendering to set list type</p>
        <ol type="1">
          {this.list.isRender = false && this.list.map((item, index) => 
            <List key={index} item= {item} />
          )}
        </ol>
        <ol type="A"> 
          {this.list.map((item, index) => 
              <List key={index} item= {item} />
            )}
        </ol>
        <ol type="a">
          {this.list.isRender = false && this.list.map((item, index) => 
              <List key={index} item= {item} />
            )}
        </ol>
        <ol type="i">
          {this.list.map((item, index) => 
              <List key={index} item= {item} />
            )}
        </ol>
        <ol start="24">
          {this.list.map((item, index) => 
              <List key={index} item= {item} />
            )}
        </ol>
      </div>
    );
  }
}

export default App;
