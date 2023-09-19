import { Routes, Route } from "react-router-dom";
import { About, Contact, Home, Portfolio, Testimonials } from "./pages";
import Header from "./components/Header";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Header />
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
