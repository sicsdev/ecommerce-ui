import React, { useRef, useEffect } from "react";
import sidebarStyle from "../../styles/Sidebar.module.scss";

const sidebar = (props) => {
  const ref = useRef(null);
  const { onClickOutside } = props;

  console.log("acdv v : : ", onClickOutside , "ASDVFB :", ref);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);
  console.log("SADVFBGN : ", ref);
  return (
    <>
      <div ref={ref} className={sidebarStyle.sidebarmain}>
        <div className={sidebarStyle.sidebar}>
          <h1>Pages</h1>
        </div>
        <div className={sidebarStyle}>
          <ol type="1">
            <li>
              Dashboard
              <ol type="a">
                <li>Replnish Now </li>
                <li>Replnish Soon </li>
                <li>All SKU's </li>
              </ol>
            </li>
            <li>Special Event</li>
            <li>Settings</li>
            <li>
              Detailed by Product
              <ol type="a">
                <li>Product#? </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default sidebar;
