import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./paginas/Home";
import FilmesPopulares from "./paginas/Filmespopulares";


import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home/>} />
          <Route path="filme/:id" element={<FilmesPopulares />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);