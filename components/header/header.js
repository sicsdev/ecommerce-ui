import React from "react";
import headerstyle from "../../styles/Header.module.scss";

const header = () => {
  return (
    <>
      <div className={headerstyle.headermain}>
        <div className={headerstyle.header_logo}>
          <img src="#" alt="headerlogo" />
        </div>
        <div className={headerstyle.header_heading}>
          <h1>DASHBOARD</h1>
        </div>
      </div>
    </>
  );
};

export default header;