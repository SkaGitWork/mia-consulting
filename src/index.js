import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Cad from "./pages/Cad"
import Services from "./pages/Services"
import Formation from "./pages/Formation"
import Contact from "./pages/Contact"

class App extends React.Component {
  componentDidMount() {
    const script = document.createElement("script")

    script.src = "js/custom.js"
    script.async = true

    document.body.appendChild(script)
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan_evacuation" element={<Cad />} />
          <Route path="/services" element={<Services />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("root"))


