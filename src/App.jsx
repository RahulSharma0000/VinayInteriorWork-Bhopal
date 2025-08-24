import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";

function App() {
  return (
    <Router>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>

      {/* Main content with padding to prevent overlap */}
      <div className="pt-16 min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Service/>
                <Gallery />
                <About />
                <Contact />
              </>
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path ="/services" element={<Service/>} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;