import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projetos" element={<Works />} /> */}
        {/* <Route path="/sobre-mim" element={<AboutMe />} /> */}
        {/* <Route path="/contatos" element={<Contacts />} /> */}
        <Route path="/*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
