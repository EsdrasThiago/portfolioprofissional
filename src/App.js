import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import './styles/MainStyle.css'
import Works from "./pages/Works";
import AboutMe from "./pages/AboutMe";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Works />} />
        <Route path="/sobre-mim" element={<AboutMe />} />
        <Route path="/contatos" element={<Contacts />} />
        <Route path="/*" element={<NotFound />}/>
      </Routes>
      <hr className="footer-hr" />
      <Footer />
    </main>
  );
}

export default App;
