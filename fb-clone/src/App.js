import React from 'react'
import './App.css';

import Header from "./Components/Header.js"
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>

      {/* App body */}
      <div className="app_body">
      <Sidebar />

      {/* feed */}
      {/* widgets */}

      </div>
    </div>
  );
}

export default App;
