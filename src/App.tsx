import React from 'react';
import './assets/App.css';
import Header from "./component/header/Header";
import Sidebar from "./component/sidebar/Sidebar";
import Content from "./component/Content";
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from "./component/Loader";
import SibebarProvider from "./context/SidebarContext";

function App() {
  return (
      <Suspense fallback={ <Loader/> }>
          <SibebarProvider>
              <BrowserRouter>
                  <div className="flex">
                      <Sidebar/>
                      <div className="w-full flex flex-col">
                          <Header/>
                          <Content/>
                      </div>
                  </div>
              </BrowserRouter>
          </SibebarProvider>
      </Suspense>
  );
}

export default App;
