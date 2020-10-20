import React from 'react';
import './assets/App.css';
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Content from "./component/Content";

function App() {
  return (
    <div>
        <Header/>
        <div>
            <Sidebar/>
            <Content/>
        </div>
    </div>
  );
}

export default App;
