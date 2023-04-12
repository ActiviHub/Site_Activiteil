import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Layout from "./pages/Layout";
import Partners from "./pages/Partners";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Welcome from "./pages/Welcome";
import Medias from "./pages/Medias";
import Infos from "./pages/Infos";
import NoPage from "./pages/NoPage";

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/home" element={<div>Hello Home</div>} />
      <Route path="/about" element={<About />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/medias" element={<Medias />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/Infos" element={<Infos />} />
      <Route
        index
        element={
          <div>
            <Welcome />
          </div>
        }
      />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default Views;
