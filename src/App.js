import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Footer from "./pages/Footer";
import NoPage from "./pages/NoPage";

/*basename="/my_portfolio/build/" (put this in browser router for the build)*/
function App() {
  return (
    <>
    <BrowserRouter basename="/my_portfolio/build/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path='/' element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Reviews" element={<Reviews />} />
          <Route path="Contact" element={<Contact />} />
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
