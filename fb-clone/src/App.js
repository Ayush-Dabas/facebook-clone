import React from 'react'
import './App.css';

import Header from "./Components/Header.js"
import Sidebar from './Components/Sidebar';
import Feed from "./Components/Feed.js"

function App() {
  return (
    <div className="app">
      <Header/>

      {/* App body */}
      <div className="app_body">
      <Sidebar />
      <Feed />
      {/* widgets */}

      </div>
    </div>
  );
}

export default App;
