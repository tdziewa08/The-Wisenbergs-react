import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home.jsx"
import Members from './components/Members.jsx'
import Stickers from './components/Stickers.jsx'
import About from "./components/About.jsx"
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