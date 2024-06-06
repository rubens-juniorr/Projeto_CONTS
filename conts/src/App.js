import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componentes/pages/Home";
import Company from "./componentes/pages/Company";
import Contact from "./componentes/pages/Contact";
import NewProject from "./componentes/pages/NewProject";
import Projects from "./componentes/pages/Projects";

import Container from "./componentes/layout/Container";
import NavBar from "./componentes/layout/NavBar";
import Footer from "./componentes/layout/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<NewProject />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
