import "./App.css";

import MainNavbar from "./assets/Components/MainNavbar";
import Home from "./assets/Components/Home";
import Info from "./assets/Components/Info";
import Footer from "./assets/Components/Footer";
import About from "./assets/Components/About";
import Portfolio from "./assets/Components/Portfolio";
import Contact from "./assets/Components/Contact";

function App() {
  return (
    <>
      <MainNavbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Info />
      <Footer />
    </>
  );
}

export default App;
