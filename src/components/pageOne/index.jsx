import React from "react";
import logo from "../../img/logo_page.svg";
import "./pageOne.css";
import CirclesAnim from "../circlesAnim";
import res_1 from "../../img/resource1_landing.gif";
import Core from "../core";

const PageOne = ({ isActive }) => {
  return (
    <div className="page_container">
      <p className="tittle-page">Redefine the</p>
      <p className="tittle-page">Rules of Strategy</p>
      <Core image={res_1} tittle="" description="" extraStyle="-dif2" />

      <p className="paragraph-page">
        Clear Path Acuity orchestrates intelligence beyond the known
        horizon—transforming fluid insights into precision plans that anticipate
        what others can’t yet see.
      </p>
    </div>
  );
};

export default PageOne;
