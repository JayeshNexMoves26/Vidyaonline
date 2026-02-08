import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

import React from 'react'

function Layout() {
  return (
    <div>
        <Navbar  /> 
        <Outlet  />
        <Footer />
    </div>
  )
}

export default Layout