import "./App.css";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Works />
                <Contact />
              </>
            }
          />

          <Route path="*" element={"404 not found"} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
