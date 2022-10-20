import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Material } from "./Material";
import { AntD } from "./Antd";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/material" element={<Material />} />
          <Route path="/antd" element={<AntD />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
