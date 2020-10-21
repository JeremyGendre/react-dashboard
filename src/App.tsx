import React from 'react';
import './assets/App.css';
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Content from "./component/Content";
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from "./component/Loader";

function App() {
  return (
      <Suspense fallback={Loader}>
          <BrowserRouter>
              <div className="flex">
                  <Sidebar/>
                  <div className="w-full">
                      <Header/>
                      <Content/>
                  </div>
              </div>
          </BrowserRouter>
      </Suspense>
  );
}

export default App;
