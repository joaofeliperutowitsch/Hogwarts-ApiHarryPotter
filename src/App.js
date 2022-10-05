import React from "react";
import Rota from "./components/rotas/Rota.js";
import { GlobalStyle } from "./components/styled/StyledGlobal.js";
import Footer from "./components/containers/Footer";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Rota />
    </div>
  );
};
export default App;
