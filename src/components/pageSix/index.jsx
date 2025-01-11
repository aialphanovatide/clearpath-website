import React from "react";
import "./pageSix.css";
import res_1 from "../../img/resource1_page_6.gif";
import Core from "../core";

function PageSix() {
  return (
    <div className="page_container">
      <p className="tittle-page">Begin</p>
      <p className="paragraph-page-bold">
        Ready to move beyond the confines of conventional wisdom? Let’s define
        new standards in strategy—together.
      </p>
      <Core image={res_1} tittle="" description="" extraStyle="-dif5" />
    </div>
  );
}

export default PageSix;
