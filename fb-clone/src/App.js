import React from 'react'
import './App.css';

import Header from "./Components/Header.js"
import Sidebar from './Components/Sidebar';
import Feed from "./Components/Feed.js"
import Widgets from './Components/Widgets';
import Login from './Components/Login';
import {useStateValue} from "./StateProvider.js"


function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (

        <>
          <Header/>

          {/* App body */}
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        
        </>
      )
    }

    </div>
  );
}

export default App;
