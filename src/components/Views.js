import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Layout from "./pages/Layout";
import Partners from "./pages/Partners";
import Supporters from "./pages/Supporters";
import Contact from "./pages/Contact";
import Welcome from "./pages/Welcome";
import Medias from "./pages/Medias";

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/home" element={<div>Hello Home</div>} />
      <Route path="/about" element={<About />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/medias" element={<Medias />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/supporters" element={<Supporters />} />
      <Route path="/contacts" element={<Contact />} />
      <Route
        index
        element={
          <div>
            <Welcome />
          </div>
        }
      />
      <Route path="*" element={<div>Erreur 404 : Page non trouvée</div>} />
    </Routes>
  );
};

export default Views;
