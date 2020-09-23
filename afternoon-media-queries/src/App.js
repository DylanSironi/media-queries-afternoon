import React, { Component } from 'react';
import './App.css';


class App extends Component() {
  constructor(props) {
    super(props);
    this.state={
      menu: false,

    }
  }
  slide = () => {
    this.setState({ menu: !this.state.menu })
}

  render() {
    return (
      <div className="App">
        <header className='navbar'>
          <h1 className='navbar-title'> Start Bootstrap</h1>
          <div className='navbar-menu'>
            <a href='#'>About</a>
            <a href='#'>Projects</a>
            <a href='#'>Contacts</a>
          </div>
          <div className='navbar-icon'  onClick= {this.slide}> Menu &#9776;</div>
        </header>
        <div className={this.state.menu ? 'menu-slide': 'do not display'}>
            <a href='#'>About</a>
            <a href='#'>Projects</a>
            <a href='#'>Contacts</a>
          </div>
        <div className="main">
          <h1 className='bigTitle'>GRAYSCALE</h1>
          <h2 className='smallTitle'>A free, responsive, one page Bootstrap theme created by Start Bootstrap.</h2>
          <div className='startButton'>GET STARTED</div>
        </div>
      </div>
    );
  }

}

export default App;
