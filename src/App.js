import React from 'react';
import './App.css';
import Router  from './routes'



function App() {
  return (
    // <SidebarContextProvider>
      <div className="app">
        <Router />
      </div>
    // </SidebarContextProvider>
    // <h1></h1>
  );
}

export default App;
