import React from 'react';
import './App.css';
import ButtonCom from './component/ButtonCom';
import PostList from './component/PostList';
import SelecePosts from './component/SelecePosts';

function App() {
  return (
    <div className="App">
      <h1>hi</h1>
      <ButtonCom />
      <br />
      <PostList />
      <SelecePosts />
    </div>
  );
}

export default App;
