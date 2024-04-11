import React, { useEffect } from 'react'
import Header from '../../shared/Header'
import Sidebar from '../../shared/Sidebar'
import ShoppingCart from "../../shared/ShoppingCart"
import SearchModal from "../../shared/SearchModal"

import {NavLink, useParams} from "react-router-dom"

import {useDispatch, useSelector} from "react-redux"
import { currentAdmin } from '../../../services/LoginService'
import {addAdmin} from "../../../redux/adminReducer"
const Dashboard = () => {
  let dispatch = useDispatch()

  let state = useSelector(state=> state.admin)

  let getAdminDataFun = async () => {
    let newToken = document.cookie.split("=")[1];

    try {
        let adminResponse = await currentAdmin(newToken);
        let adminData = adminResponse?.data?.data;

        dispatch(addAdmin(adminData));
    } catch (error) {
        console.error(error);
    }
  }
  useEffect(()=> {

if( Object.keys(state).length === 0) {
  getAdminDataFun()
}
  }, [])
  return (
    <>
     {/* --------------------------------------------------- */}
  {/* Body Wrapper */}
  {/* --------------------------------------------------- */}
  <div className="page-wrapper show-sidebar" id="main-wrapper" data-layout="vertical" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
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
        <div className="card bg-light-warning shadow-none position-relative overflow-hidden">
          <div className="card-body px-4 py-3">
            <div className="row align-items-center">
              <div className="col-9">
                <h4 className="fw-semibold mb-8">Dashboard</h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink className="text-muted text-decoration-none" to={`/auth/dashboard/${state?._id}`}>Dashboard</NavLink></li>
                  </ol>
                </nav>
              </div>
              <div className="col-3">
                <div className="text-center mb-n5">  
                  <img src="/assets/dist/images/breadcrumb/ChatBc.png" alt className="img-fluid mb-n4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-8 d-flex align-items-stretch">
              <div class="card w-100">
                <div class="card-body">
                  <div class="d-sm-flex d-block align-items-center justify-content-between mb-3">
                    <div class="mb-3 mb-sm-0">
                      <h5 class="card-title fw-semibold">Product Performances</h5>
                      <p class="card-subtitle">What Impacts Product Performance?</p>
                    </div>
                    <div>
                      <select class="form-select fw-semibold">
                        <option value="1">March 2023</option>
                        <option value="2">April 2023</option>
                        <option value="3">May 2023</option>
                        <option value="4">June 2023</option>
                      </select>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table class="table align-middle text-nowrap mb-0">
                      <thead>
                        <tr class="text-muted fw-semibold">
                          <th scope="col" class="ps-0">Name</th>
                          <th scope="col">QTY</th>
                          <th scope="col">Price</th>
                          <th scope="col">Earning</th>
                          <th scope="col">Profit</th>
                        </tr>
                      </thead>
                      <tbody class="border-top">
                        <tr>
                          <td class="ps-0">
                            <div class="d-flex align-items-center">
                              <div class="me-2 pe-1">
                                <img src="/assets/dist/images/products/product-1.jpg" class="rounded-2" width="48" height="48" alt="" />
                              </div>
                              <div>
                                <h6 class="fw-semibold mb-1">Minecraf App</h6>
                                <p class="fs-2 mb-0 text-muted">Jason Roy</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="mb-0 fs-3 text-dark">75</p>
                          </td>
                          <td>
                          <p class="mb-0 fs-3 text-dark">₹100</p>

                            {/* <span class="badge fw-semibold py-1 w-85 bg-light-success text-success">Low</span> */}
                          </td>
                          <td>
                            <p class="fs-3 text-dark mb-0">7.5k</p>
                          </td>
                          <td>
                          <p class="mb-0 fs-3 text-dark">₹4300</p>
                            {/* <div id="table-chart"></div> */}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
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
  )
}

export default Dashboard