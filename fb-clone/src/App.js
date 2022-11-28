import React from 'react'
import './App.css';

import Header from "./Components/Header.js"
import Sidebar from './Components/Sidebar';
import Feed from "./Components/Feed.js"
import Widgets from './Components/Widgets';

function App() {
  return (
    <div className="app">
      <Header/>

      {/* App body */}
      <div className="app_body">
      <Sidebar />
      <Feed />
      <Widgets />

      </div>
    </div>
  );
}

export default App;
