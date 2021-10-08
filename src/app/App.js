import React, { Component} from 'react';
import './App.scss';
import Header from '../components/Header';
import Main from '../../src/routes'

class App extends Component {
  render() {
    return (
      <div>
        {/* import dei componenti Header main footer */}
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
