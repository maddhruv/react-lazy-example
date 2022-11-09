import { lazy, Suspense } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const Material = lazy(() => import("./Material"));
const AntD = lazy(() => import("./Antd"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/material" element={<Material />} />
            <Route path="/antd" element={<AntD />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
