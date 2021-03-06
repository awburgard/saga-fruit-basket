import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import FruitList from '../FruitList/FruitList.js';
import FruitSelector from '../FruitSelector/FruitSelector.js';
import 'bulma/css/bulma.css';
import Footer from '../Footer/footer';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
        <div>
        <Header />
        {/* FruitSelector dispatches actions to update the Redux store */}
        <FruitSelector />
        {/* FruitList will connect to the store for the list of fruit */}
        <FruitList />
        </div>
    );
  }
}

export default App;
