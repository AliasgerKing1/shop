import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  let state = useSelector(state => state.productCart)
  return (
    <>
          <header className="app-header"> 
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link sidebartoggler nav-icon-hover ms-n3" id="headerCollapse" href="javascript:void(0)">
                <i className="ti ti-menu-2" />
              </a>
            </li>
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link nav-icon-hover" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="ti ti-search" />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav quick-links d-none d-lg-flex">
            <li className="nav-item dropdown hover-dd d-none d-lg-block">
              <a className="nav-link" href="javascript:void(0)" data-bs-toggle="dropdown">Apps<span className="mt-1"><i className="ti ti-chevron-down" /></span></a>
              <div className="dropdown-menu dropdown-menu-nav dropdown-menu-animate-up py-0">
                <div className="row">
                  <div className="col-8">
                    <div className=" ps-7 pt-7">
                      <div className="border-bottom">
                        <div className="row">
                          <div className="col-6">
                            <div className="position-relative">
                              <a href="app-chat.html" className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none">
                                <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                  <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-chat.svg" alt className="img-fluid" width={24} height={24} />
                                </div>
                                <div className="d-inline-block">
                                  <h6 className="mb-1 fw-semibold bg-hover-warning">Chat Application</h6>
                                  <span className="fs-2 d-block text-dark">New messages arrived</span>
                                </div>
                              </a>
                              <a href="app-invoice.html" className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none">
                                <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                  <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-invoice.svg" alt className="img-fluid" width={24} height={24} />
                                </div>
                                <div className="d-inline-block">
                                  <h6 className="mb-1 fw-semibold bg-hover-warning">Invoice App</h6>
                                  <span className="fs-2 d-block text-dark">Get latest invoice</span>
                                </div>
                              </a>
                              <a href="app-contact2.html" className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none">
                                <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                  <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-mobile.svg" alt className="img-fluid" width={24} height={24} />
                                </div>
                                <div className="d-inline-block">
                                  <h6 className="mb-1 fw-semibold bg-hover-warning">Contact Application</h6>
                                  <span className="fs-2 d-block text-dark">2 Unsaved Contacts</span>
                                </div>
                              </a>
                              <a href="app-email.html" className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none">
                                <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                  <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-message-box.svg" alt className="img-fluid" width={24} height={24} />
                                </div>
                                <div className="d-inline-block">
                                  <h6 className="mb-1 fw-semibold bg-hover-warning">Email App</h6>
                                  <span className="fs-2 d-block text-dark">Get new emails</span>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="position-relative">
                              <a href="page-user-profile.html" className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none">
                                <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                  <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-cart.svg" alt className="img-fluid" width={24} height={24} />
                                </div>
                                <div className="d-inline-block">
                                  <h6 className="mb-1 fw-semibold bg-hover-warning">User Profile</h6>
                                  <span className="fs-2 d-block text-dark">learn more information</span>
                                </div>
                              </a>
                              <a href="app-calendar.html" className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none">
                                <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                  <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-date.svg" alt className="img-fluid" width={24} height={24} />
                                </div>
                                <div className="d-inline-block">
                                  <h6 className="mb-1 fw-semibold bg-hover-warning">Calendar App</h6>
                                  <span className="fs-2 d-block text-dark">Get dates</span>
                                </div>
                              </a>
                              <a href="app-contact.html" className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none">
                                <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                  <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-lifebuoy.svg" alt className="img-fluid" width={24} height={24} />
                                </div>
                                <div className="d-inline-block">
                                  <h6 className="mb-1 fw-semibold bg-hover-warning">Contact List Table</h6>
                                  <span className="fs-2 d-block text-dark">Add new contact</span>
                                </div>
                              </a>
                              <a href="app-notes.html" className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none">
                                <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                  <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-application.svg" alt className="img-fluid" width={24} height={24} />
                                </div>
                                <div className="d-inline-block">
                                  <h6 className="mb-1 fw-semibold bg-hover-warning">Notes Application</h6>
                                  <span className="fs-2 d-block text-dark">To-do and Daily tasks</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center py-3">
                        <div className="col-8">
                          <a className="fw-semibold text-dark d-flex align-items-center lh-1 text-decoration-none" href="#"><i className="ti ti-help fs-6 me-2" />Frequently Asked Questions</a>
                        </div>
                        <div className="col-4">
                          <div className="d-flex justify-content-end pe-4">
                            <button className="btn btn-warning">Check</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 ms-n4">
                    <div className="position-relative p-7 border-start h-100">
                      <h5 className="fs-5 mb-9 fw-semibold">Quick Links</h5>
                      <ul className>
                        <li className="mb-3">
                          <a className="fw-semibold text-dark bg-hover-warning text-decoration-none text-decoration-none text-decoration-none text-decoration-none" href="page-pricing.html">Pricing Page</a>
                        </li>
                        <li className="mb-3">
                          <a className="fw-semibold text-dark bg-hover-warning text-decoration-none text-decoration-none text-decoration-none text-decoration-none" href="authentication-login.html">Authentication Design</a>
                        </li>
                        <li className="mb-3">
                          <a className="fw-semibold text-dark bg-hover-warning text-decoration-none text-decoration-none text-decoration-none text-decoration-none" href="authentication-register.html">Register Now</a>
                        </li>
                        <li className="mb-3">
                          <a className="fw-semibold text-dark bg-hover-warning text-decoration-none text-decoration-none text-decoration-none text-decoration-none" href="authentication-error.html">404 Error Page</a>
                        </li>
                        <li className="mb-3">
                          <a className="fw-semibold text-dark bg-hover-warning text-decoration-none text-decoration-none text-decoration-none text-decoration-none" href="app-notes.html">Notes App</a>
                        </li>
                        <li className="mb-3">
                          <a className="fw-semibold text-dark bg-hover-warning text-decoration-none text-decoration-none text-decoration-none text-decoration-none" href="page-user-profile.html">User Application</a>
                        </li>   
                        <li className="mb-3">
                          <a className="fw-semibold text-dark bg-hover-warning text-decoration-none text-decoration-none text-decoration-none text-decoration-none" href="page-account-settings.html">Account Settings</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown-hover d-none d-lg-block">
              <a className="nav-link" href="app-chat.html">Chat</a>
            </li>
            <li className="nav-item dropdown-hover d-none d-lg-block">
              <a className="nav-link" href="app-calendar.html">Calendar</a>
            </li>
            <li className="nav-item dropdown-hover d-none d-lg-block">
              <a className="nav-link" href="app-email.html">Email</a>
            </li>
          </ul>
          <div className="d-block d-lg-none">
            <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/dark-logo.svg" className="dark-logo" width={180} alt />
            {/* <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/light-logo.svg" className="light-logo" width={180} alt /> */}
          </div>
          <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="p-2">
              <i className="ti ti-dots fs-7" />
            </span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <div className="d-flex align-items-center justify-content-between">
          
              <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                <li className="nav-item dropdown">
                  <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-flag-en.svg" alt className="rounded-circle object-fit-cover round-20" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                    <div className="message-body" data-simplebar>
                      <a href="javascript:void(0)" className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item">
                        <div className="position-relative">
                          <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-flag-en.svg" alt className="rounded-circle object-fit-cover round-20" />
                        </div>
                        <p className="mb-0 fs-3">English (UK)</p>
                      </a>
                      <a href="javascript:void(0)" className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item">
                        <div className="position-relative">
                          <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-flag-cn.svg" alt className="rounded-circle object-fit-cover round-20" />
                        </div>
                        <p className="mb-0 fs-3">中国人 (Chinese)</p>
                      </a>
                      <a href="javascript:void(0)" className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item">
                        <div className="position-relative">
                          <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-flag-fr.svg" alt className="rounded-circle object-fit-cover round-20" />
                        </div>
                        <p className="mb-0 fs-3">français (French)</p>
                      </a>
                      <a href="javascript:void(0)" className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item">
                        <div className="position-relative">
                          <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-flag-sa.svg" alt className="rounded-circle object-fit-cover round-20" />
                        </div>
                        <p className="mb-0 fs-3">عربي (Arabic)</p>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link notify-badge nav-icon-hover" href="javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <i className="ti ti-basket" />
                    <span className="badge rounded-pill bg-danger fs-2">{state?.length}</span>                   
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="ti ti-bell-ringing" />
                    <div className="notification bg-warning rounded-circle" />
                  </a>
                  <div className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                    <div className="d-flex align-items-center justify-content-between py-3 px-7">
                      <h5 className="mb-0 fs-5 fw-semibold">Notifications</h5>
                      <span className="badge bg-warning rounded-4 px-3 py-1 lh-sm">5 new</span>
                    </div>
                    <div className="message-body" data-simplebar>
                      <a href="javascript:void(0)" className="py-6 px-7 d-flex align-items-center dropdown-item">
                        <span className="me-3">
                          <img src="../../dist/images/profile/user-1.jpg" alt="user" className="rounded-circle" width={48} height={48} />
                        </span>
                        <div className="w-75 d-inline-block v-middle">
                          <h6 className="mb-1 fw-semibold">Roman Joined the Team!</h6>
                          <span className="d-block">Congratulate him</span>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="py-6 px-7 d-flex align-items-center dropdown-item">
                        <span className="me-3">
                          <img src="../../dist/images/profile/user-2.jpg" alt="user" className="rounded-circle" width={48} height={48} />
                        </span>
                        <div className="w-75 d-inline-block v-middle">
                          <h6 className="mb-1 fw-semibold">New message</h6>
                          <span className="d-block">Salma sent you new message</span>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="py-6 px-7 d-flex align-items-center dropdown-item">
                        <span className="me-3">
                          <img src="../../dist/images/profile/user-3.jpg" alt="user" className="rounded-circle" width={48} height={48} />
                        </span>
                        <div className="w-75 d-inline-block v-middle">
                          <h6 className="mb-1 fw-semibold">Bianca sent payment</h6>
                          <span className="d-block">Check your earnings</span>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="py-6 px-7 d-flex align-items-center dropdown-item">
                        <span className="me-3">
                          <img src="../../dist/images/profile/user-4.jpg" alt="user" className="rounded-circle" width={48} height={48} />
                        </span>
                        <div className="w-75 d-inline-block v-middle">
                          <h6 className="mb-1 fw-semibold">Jolly completed tasks</h6>
                          <span className="d-block">Assign her new tasks</span>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="py-6 px-7 d-flex align-items-center dropdown-item">
                        <span className="me-3">
                          <img src="../../dist/images/profile/user-5.jpg" alt="user" className="rounded-circle" width={48} height={48} />
                        </span>
                        <div className="w-75 d-inline-block v-middle">
                          <h6 className="mb-1 fw-semibold">John received payment</h6>
                          <span className="d-block">$230 deducted from account</span>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="py-6 px-7 d-flex align-items-center dropdown-item">
                        <span className="me-3">
                          <img src="../../dist/images/profile/user-1.jpg" alt="user" className="rounded-circle" width={48} height={48} />
                        </span>
                        <div className="w-75 d-inline-block v-middle">
                          <h6 className="mb-1 fw-semibold">Roman Joined the Team!</h6>
                          <span className="d-block">Congratulate him</span>
                        </div>
                      </a>
                    </div>
                    <div className="py-6 px-7 mb-1">
                      <button className="btn btn-outline-warning w-100"> See All Notifications </button>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link pe-0" href="javascript:void(0)" id="drop1" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="d-flex align-items-center">
                      <div className="user-profile-img">
                        <img src="/assets/dist/images/profile/user-1.jpg" className="rounded-circle" width={35} height={35} alt />
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop1">
                    <div className="profile-dropdown position-relative" data-simplebar>
                      <div className="py-3 px-7 pb-0">
                        <h5 className="mb-0 fs-5 fw-semibold">User Profile</h5>
                      </div>
                      <div className="d-flex align-items-center py-9 mx-7 border-bottom">
                        <img src="/assets/dist/images/profile/user-1.jpg" className="rounded-circle" width={80} height={80} alt />
                        <div className="ms-3">
                          <h5 className="mb-1 fs-3">Mathew Anderson</h5>
                          <span className="mb-1 d-block text-dark">Designer</span>
                          <p className="mb-0 d-flex text-dark align-items-center gap-2">
                            <i className="ti ti-mail fs-4" /> info@modernize.com
                          </p>
                        </div>
                      </div>
                      <div className="message-body">
                        <a href="page-user-profile.html" className="py-8 px-7 mt-8 d-flex align-items-center">
                          <span className="d-flex align-items-center justify-content-center bg-light rounded-1 p-6">
                            <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-account.svg" alt width={24} height={24} />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3">
                            <h6 className="mb-1 bg-hover-warning fw-semibold"> My Profile </h6>
                            <span className="d-block text-dark">Account Settings</span>
                          </div>
                        </a>
                        <a href="app-email.html" className="py-8 px-7 d-flex align-items-center">
                          <span className="d-flex align-items-center justify-content-center bg-light rounded-1 p-6">
                            <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-inbox.svg" alt width={24} height={24} />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3">
                            <h6 className="mb-1 bg-hover-warning fw-semibold">My Inbox</h6>
                            <span className="d-block text-dark">Messages &amp; Emails</span>
                          </div>
                        </a>
                        <a href="app-notes.html" className="py-8 px-7 d-flex align-items-center">
                          <span className="d-flex align-items-center justify-content-center bg-light rounded-1 p-6">
                            <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-tasks.svg" alt width={24} height={24} />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3">
                            <h6 className="mb-1 bg-hover-warning fw-semibold">My Task</h6>
                            <span className="d-block text-dark">To-do and Daily Tasks</span>
                          </div>
                        </a>
                      </div>
                      <div className="d-grid py-4 px-7 pt-8">
                        <div className="upgrade-plan bg-light-warning position-relative overflow-hidden rounded-4 p-4 mb-9">
                          <div className="row">
                            <div className="col-6">
                              <h5 className="fs-4 mb-3 w-50 fw-semibold text-dark">Unlimited Access</h5>
                              <button className="btn btn-warning text-white">Upgrade</button>
                            </div>
                            <div className="col-6">
                              <div className="m-n4">
                                <img src="/assets/dist/images/backgrounds/unlimited-bg.png" alt className="w-100" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <a href="authentication-login.html" className="btn btn-outline-warning">Log Out</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header