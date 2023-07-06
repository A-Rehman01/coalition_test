import React from "react"
import Header from "./components/header/Header"
import { BrowserRouter } from "react-router-dom"
import Router from "./router/Router"
import './css/app.css'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="container-view">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App