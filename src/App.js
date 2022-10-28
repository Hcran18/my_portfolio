import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
    <BrowserRouter basename="/my_portfolio/build/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path='/' element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Education" element={<Education />} />
          <Route path="Experience" element={<Experience />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="/" element={<Footer />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
