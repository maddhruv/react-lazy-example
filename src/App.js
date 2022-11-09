import { Suspense, useEffect } from "react";
import { lazyWithRetryAndPrefetching } from "./lazy";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazyWithRetryAndPrefetching(() => import("./Home"));
const Material = lazyWithRetryAndPrefetching(() => import("./Material"));
const AntD = lazyWithRetryAndPrefetching(() => import("./Antd"));

function App() {
  useEffect(() => {
    Material.prefetch();
    AntD.prefetch();
  }, []);
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
