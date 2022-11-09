import { Suspense } from "react";
import { lazyWithRetry } from "./lazy";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazyWithRetry(() => import("./Home"));
const Material = lazyWithRetry(() => import("./Material"));
const AntD = lazyWithRetry(() => import("./Antd"));

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
