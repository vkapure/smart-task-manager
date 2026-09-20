import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
