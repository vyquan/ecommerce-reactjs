import React from "react";
import HeaderWebsite from "../components/website/header";
import FooterWebsite from "../components/website/footer";
const LayoutWebsite = (props) => {
  return (
    <div>
      <HeaderWebsite {...props}/>
      {props.children}
      <FooterWebsite />
    </div>
  );
};

export default LayoutWebsite;
