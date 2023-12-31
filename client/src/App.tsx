import { useEffect, useState } from 'react'
import {BrowserRouter } from "react-router-dom";
import './App.css'
import Router from './routes/Router';

function App() {

  // push test-token in local storage
   useEffect(() => {
     localStorage.setItem('token', 'test-token')
  }, [])


  return (
    <>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </>
  )
}

export default App
