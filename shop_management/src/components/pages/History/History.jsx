import React from "react";
import Breadcrumbs from "../../shared/Breadcrumbs";
import ShoppingCart from "../../shared/ShoppingCart";
import SearchModal from "../../shared/SearchModal";
import Sidebar from "../../shared/Sidebar";
import Header from "../../shared/Header";

const History = () => {
  return (
    <>
      {/* --------------------------------------------------- */}
      {/* Body Wrapper */}
      {/* --------------------------------------------------- */}
      <div
        className="page-wrapper show-sidebar"
        id="main-wrapper"
        data-layout="vertical"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        {/* --------------------------------------------------- */}
        {/* Sidebar */}
        {/* --------------------------------------------------- */}
        <Sidebar />
        {/* --------------------------------------------------- */}
        {/* Main Wrapper */}
        {/* --------------------------------------------------- */}
        <div className="body-wrapper">
          {/* --------------------------------------------------- */}
          {/* Header Start */}
          {/* --------------------------------------------------- */}
          <Header />
          {/* --------------------------------------------------- */}
          {/* Header End */}
          {/* --------------------------------------------------- */}
          <div className="container-fluid">
            <Breadcrumbs main_text="Edit Product" sub_text="Product" />
            <div className="table-responsive">
              <table className="table table-hover table-danger text-dark table-borderless">
                <thead>
                  {/* start row */}
                  <tr>
                    <th
                      scope="col"
                      style={{ background: "#2A3547", color: "#fff" }}
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      style={{ background: "#2A3547", color: "#fff" }}
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      style={{ background: "#2A3547", color: "#fff" }}
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      style={{ background: "#2A3547", color: "#fff" }}
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      style={{ background: "#2A3547", color: "#fff" }}
                    >
                      Products
                    </th>
                  </tr>
                  {/* end row */}
                </thead>
                <tbody>
                  {/* start row */}
                  <tr>
                    <th
                      scope="row"
                      style={{ background: "#DFE7FF", color: "#000" }}
                    >
                      1
                    </th>
                    <td style={{ background: "#DFE7FF", color: "#000" }}>
                      Mark
                    </td>
                    <td style={{ background: "#DFE7FF", color: "#000" }}>
                      Otto
                    </td>
                    <td style={{ background: "#DFE7FF", color: "#000" }}>
                      @mdo
                    </td>
                    <td style={{ background: "#DFE7FF", color: "#000" }}>
                    <ul>
          <li>Product A: +5 (Remaining: 15)</li>
          <li>Product B: +3 (Remaining: 8)</li>
          <li>Product C: +4 (Remaining: 12)</li>
          {/* Add more list items for additional products */}
        </ul>
                    </td>
                  </tr>
                  {/* end row */}
                  {/* start row */}
                  <tr>
                    <th
                      scope="row"
                      style={{ background: "#FFEFD2", color: "#000" }}
                    >
                      1
                    </th>
                    <td style={{ background: "#FFEFD2", color: "#000" }}>
                      Mark
                    </td>
                    <td style={{ background: "#FFEFD2", color: "#000" }}>
                      Otto
                    </td>
                    <td style={{ background: "#FFEFD2", color: "#000" }}>
                      @mdo
                    </td>
                    <td style={{ background: "#FFEFD2", color: "#000" }}>
                    <ul>
          <li>Product A: +5 (Remaining: 15)</li>
          <li>Product B: +3 (Remaining: 8)</li>
          <li>Product C: +4 (Remaining: 12)</li>
          {/* Add more list items for additional products */}
        </ul>
                    </td>
                  </tr>
                  {/* end row */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <div className="dark-transparent sidebartoggler" />
    <div className="dark-transparent sidebartoggler" /> */}
      </div>
      {/*  Shopping Cart */}
      <ShoppingCart />
      {/*  Search Bar */}
      <SearchModal />
    </>
  );
};

export default History;
