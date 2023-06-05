import React from "react";
import BG from "./BG";
import Contacts from "./Contacts";

function Layout(props: any) {
  return (
    <>
      {props.children}
      <BG />
      <Contacts />
    </>
  );
}

export default Layout;