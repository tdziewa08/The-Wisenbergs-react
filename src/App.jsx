import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Home.jsx"
import Members from './Members.jsx'
import Stickers from './Stickers.jsx'
import About from "./About.jsx"
import Layout from "./components/Layout.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/stickers" element={<Stickers />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}