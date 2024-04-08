import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projetos" element={<Works />} /> */}
        {/* <Route path="/sobre-mim" element={<AboutMe />} /> */}
        {/* <Route path="/contatos" element={<Contacts />} /> */}
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
