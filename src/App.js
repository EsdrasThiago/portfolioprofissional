import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/MainStyle.css'

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projetos" element={<Works />} /> */}
        {/* <Route path="/sobre-mim" element={<AboutMe />} /> */}
        {/* <Route path="/contatos" element={<Contacts />} /> */}
        <Route path="/*" element={<NotFound />}/>
      </Routes>
      <hr className="footer-hr" />
      <Footer />
    </main>
  );
}

export default App;
