import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
import Contact from "../pages/Contact.jsx"
import Gallery from "../pages/Gallery.jsx"
import Navigation from "../navigation/Navigation.jsx"
import Services from "../pages/Services.jsx"
import { Helmet } from 'react-helmet'


export default function AppRouter() {
    return (
        <BrowserRouter>
              <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Little Spoon Landscaping</title>
  </Helmet>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />      
            <Route path="/services" element={<Services />} />
        </Routes>
        </BrowserRouter>
    )
    }