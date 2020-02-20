import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import PostForm from './Components/PostForm';
import PostRequest from './Components/PostRequest';

function App() {
  return (
    <div className="App">
      <PostRequest></PostRequest>
      {/* <PostForm></PostForm> */}
    </div>
  );
}

export default App;
