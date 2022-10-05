import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo Harry potter.png";
import * as S from "../styled/Styledheader.js";

const Header = () => {
  return (
    <>
      <S.topHeader>
        <div>
          <Link to="/">
            <img src={Logo} alt="" to="/" />
          </Link>
          <h1>Hogwarts</h1>
        </div>
        <nav>
          <ul>
            <li>
              <S.NavLink to="/Horarios">Horario</S.NavLink>
            </li>
            <li>
              <S.NavLink to="/Sobre">Sobre</S.NavLink>
            </li>
            <li>
              <S.NavLink to="/Feiticos">feitiços</S.NavLink>
            </li>
            <li>
              <S.NavLink to="/Regras">Regras</S.NavLink>
            </li>
          </ul>
        </nav>
      </S.topHeader>
    </>
  );
};
export default Header;
