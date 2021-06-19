import React from "react";
import HeaderAdmin from "../components/admin/header";
import SidebarAdmin from "../components/admin/sidebar";
import FooterAdmin from "../components/admin/footer";
import { Redirect } from 'react-router-dom'
const LayoutAdmin = ({ children }) => {
  const authen = JSON.parse(localStorage.getItem('user'))
  if (!authen) {
      return <Redirect to="/signin" />
  }
  else {
      if (authen.user.role == 0) {
        return <Redirect to="/signin" />
      }
      else if(authen.user.role == 1)
      {
  return (
    <div>
      <HeaderAdmin />
      <div className="container-fluid">
        <div className="row">
          <SidebarAdmin />
          {children}
        </div>
      </div>
      <FooterAdmin/>
    </div>
  );
      }}
};

export default LayoutAdmin;
