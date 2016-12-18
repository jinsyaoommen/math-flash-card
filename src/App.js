import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="pad-top">Math Flash Cards</h1>
          {/*<img src="{logo}" className="App-logo" alt="logo" />*/}
        </div>
        <main id="main-container" className="container-fluid" role="main">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
