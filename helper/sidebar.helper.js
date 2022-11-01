import React, { useState } from "react";
import Sidebar from "../components/sidebar/sidebar";

export default function sidebarHelper() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Sidebar
      show={isClicked}
      onClickOutside={() => {
        setIsClicked((prev) => !prev);
      }}
    />
  );
}
