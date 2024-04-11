import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
let state = useSelector(state=> state.admin)
  return (
    <>
        <aside className="left-sidebar">
      {/* Sidebar scroll*/}
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <a href="index.html" className="text-nowrap logo-img">
            <img src="/assets/dist/images/brand/logo-full-small.png" className="dark-logo" width={180} alt />
            {/* <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/dark-logo.svg" className="dark-logo" width={180} alt /> */}
            {/* <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/light-logo.svg" className="light-logo" width={180} alt /> */}
          </a>
          <div className="close-btn d-lg-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i className="ti ti-x fs-8 text-muted" />
          </div>
        </div>
        {/* Sidebar navigation*/}
        <nav className="sidebar-nav scroll-sidebar" data-simplebar>
          <ul id="sidebarnav">
            {/* ============================= */}
            {/* Home */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Important</span>
            </li>
            <li className="sidebar-item">
              <NavLink className="sidebar-link" to={`/auth/dashboard`} aria-expanded="false">
                <span>
                  <i className="ti ti-home-dot" />
                </span>
                <span className="hide-menu">Dashboard</span>
              </NavLink>
             
            </li>
            <li className="sidebar-item">
              <NavLink className="sidebar-link" to="/auth/product/list/all" aria-expanded="false">
                <span>
                  <i className="ti ti-shopping-cart" />
                </span>
                <span className="hide-menu">Product List</span>
              </NavLink>
             
            </li>
            <li className="sidebar-item">
            <NavLink className="sidebar-link" to="/auth/product/add" aria-expanded="false">
                <span>
                  <i className="ti ti-square-rounded-plus" />
                </span>
                <span className="hide-menu">Add Product</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
            <NavLink className="sidebar-link" to={`/auth/product/qty/65ea8598683f3b824821361b`} aria-expanded="false">
                <span>
                  <i className="ti ti-arrows-exchange" />
                </span>
                <span className="hide-menu">Buy / Sell product</span>
              </NavLink>
            </li>
          </ul>
          <div className="unlimited-access hide-menu bg-light-warning position-relative my-7 rounded">
            <div className="d-flex">
              <div className="unlimited-access-title">
                <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">Add new Product</h6>
                <NavLink className="btn btn-warning fs-2 fw-semibold lh-sm"to="/auth/product/add" >Add</NavLink>
              </div>
              <div className="unlimited-access-img">
                <img src="/assets/dist/images/backgrounds/rocket.png" alt className="img-fluid" />
              </div>
            </div>
          </div>
        </nav>
        <div className="fixed-profile p-3 bg-light-warning rounded sidebar-ad mt-3">
          <div className="hstack gap-3">
            <div className="john-img">
              <img src="/assets/dist/images/profile/user-1.jpg" className="rounded-circle" width={40} height={40} alt />
            </div>
            <div className="john-title">
              <h6 className="mb-0 fs-4 fw-semibold">Aliasger Barood</h6>
              <span className="fs-2 text-dark">Accountant</span>
            </div>
            <button className="border-0 bg-transparent text-primary ms-auto" tabIndex={0} type="button" aria-label="logout" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="logout">
              <i className="ti ti-power fs-6" />
            </button>
          </div>
        </div>  
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </aside>
    </>
  )
}

export default Sidebar