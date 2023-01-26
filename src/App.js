import "./App.css";
import "./Footer.css";
import "./FooterIcons.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Searchbar from "./components/Searchbar";
import Footer from "./components/Footer";
import Results from "./components/Results";

function App() {
  return (
    <>
      <Router>
        <div className="sticky-top">
          <Navbar />
          <Searchbar />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/results" element={<Results />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
