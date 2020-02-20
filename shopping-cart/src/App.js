import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import ProductsShelf from './Components/Shelf/ShelfContainer/ProductsShelf';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <ProductsShelf />
    </div>
  );
}

export default App;
