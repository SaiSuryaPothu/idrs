import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Toaster } from "react-hot-toast";
import './App.css'
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
   

  return (
    <>
      <BrowserRouter>
      <Navbar />
       <HeroSection />
       <Services />
       <About/>
       <Contact />
       <Footer/>
       <Toaster/>
      </BrowserRouter>
    </>
  )
}

export default App
