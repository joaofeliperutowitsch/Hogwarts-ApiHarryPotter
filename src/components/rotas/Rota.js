import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../containers/Header.js";
import Home from "../containers/Home.js";
import Gryffindor from "../containers/Gryffindor.js";
import Hufflepuff from "../containers/Hufflepuff.js";
import Ravenclaw from "../containers/Ravenclaw.js";
import Stytherin from "../containers/Slytherin.js";
import Feiticos from "../containers/Feiticos";
import Sobre from "../containers/Sobre.js";
import Regras from "../containers/Regras.js";
import Horarios from "../containers/Horarios";
import Footer from "../containers/Footer.js";
import Jogos from "../containers/Jogos.js";
import Projeto from "../containers/Projeto.js";

const Rota = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Gryffindor" element={<Gryffindor />} />
        <Route path="Hufflepuff" element={<Hufflepuff />} />
        <Route path="Ravenclaw" element={<Ravenclaw />} />
        <Route path="Slytherin" element={<Stytherin />} />
        <Route path="Feiticos" element={<Feiticos />} />
        <Route path="Sobre" element={<Sobre />} />
        <Route path="Regras" element={<Regras />} />
        <Route path="Horarios" element={<Horarios />} />
        <Route path="Jogos" element={<Jogos />} />
        <Route path="Projeto" element={<Projeto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Rota;
