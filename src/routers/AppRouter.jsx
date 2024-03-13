import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
import Contact from "../pages/Contact.jsx"
import Gallery from "../pages/Gallery.jsx"
import Navigation from "../navigation/Navigation.jsx"


export default function AppRouter() {
    return (
        <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />      
        </Routes>
        </BrowserRouter>
    )
    }