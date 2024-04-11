import React, { useState, useEffect } from 'react'

import {useNavigate} from "react-router-dom"

import {useFormik} from "formik"

import signinSchema from "../../../schemas/SigninSchema"

import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import {Login} from "../../../services/LoginService"

import axios from "axios"
import ErrorAlert from '../../shared/ErrorAlert';

const Signin = () => {
  let [alert, setAlert] = useState(false)
  let navigate = useNavigate()

  const [ admin, setAdmin ] = useState([]);
  const [ profile, setProfile ] = useState([]);
  const [ showAlert, setShowAlert ] = useState({
    state : false,
    loading : false,
    msg : ""
  });

  const loginFun = useGoogleLogin({
    onSuccess: (codeResponse) => setAdmin(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
});

// useEffect(
//     () => {
//         if (admin) {
//             axios
//                 .get(`https://www.googleapis.com/oauth2/v1/admininfo?access_token=${admin.access_token}`, {
//                     headers: {
//                         Authorization: `Bearer ${admin.access_token}`,
//                         Accept: 'application/json',
//                     }
//                 })
//                 .then((res) => {
//                     setProfile(res.data);
//                 })
//                 .catch((err) => console.log(err));
//         }
//     },
//     [ admin ]
// );
  let initialValues = {
    username : "",
    password : "",
  }

  let {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
initialValues,
validationSchema : signinSchema,
onSubmit : async () => {
  let signinResponse = await Login(values)
  let status = signinResponse.data.status
  console.log(status)
  if(status === 200) {
    setShowAlert({...setAlert, state : false, msg : ""})

  // Set a cookie
function setCookie(name, value, expirationHours) {
  const expirationTime = new Date();
  expirationTime.setTime(expirationTime.getTime() + expirationHours * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${expirationTime.toUTCString()}; path=/`;
}

const newToken = signinResponse.data.token;
setCookie('dd_rr__ll_cash__price', newToken, 6); // Expires in 6 hours

// let allCookies = document.cookie;
// console.log(allCookies.split("=")[1]);
    navigate(`/auth/dashboard`)

  } else if( status === 401) {
    setShowAlert({...setAlert, state : true, msg : status.error_msg})
  } else {
    setShowAlert({...setAlert, state : true, msg : "Interal server error"})
  }
}
  })
  return (
    <>
     <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
  <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
    <div className="d-flex align-items-center justify-content-center w-100">
  
<div className="row justify-content-center w-100">
  <div className="col-md-8 col-lg-6 col-xxl-3">
    <div className="card mb-0">
      <div className="card-body">
        <a href="index.html" className="text-nowrap logo-img text-center d-block mb-5 w-100">
          <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/dark-logo.svg" width={180} alt />
        </a>
        <div className="row">
          <div className="col-6 mb-2 mb-sm-0">
            <a className="btn btn-white text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8" href="javascript:void(0)" role="button">
              <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/google-icon.svg" alt className="img-fluid me-2" width={18} height={18} />
              <span className="d-none d-sm-block me-1 flex-shrink-0">Signin with</span>Google
            </a>
          </div>
          <div className="col-6">
            <a className="btn btn-white text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8" href="javascript:void(0)" role="button">
              <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/facebook-icon.svg" alt className="img-fluid me-2" width={18} height={18} />
              <span className="d-none d-sm-block me-1 flex-shrink-0">Signin with</span>FB
            </a>
          </div>
        </div>
        <div className="position-relative text-center my-4">
          <p className="mb-0 fs-4 px-3 d-inline-block bg-white text-dark z-index-5 position-relative">or sign in with</p>
          <span className="border-top w-100 position-absolute top-50 start-50 translate-middle" />
        </div>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className={`form-control ${errors.username && touched.username ? "is-invalid" : ""}`} id="username" aria-describedby="username" name="username" onBlur={handleBlur} onChange={handleChange} value={values.username} placeholder='Milo_ron'/>
                  <small className='text-danger'>{errors.username && touched.username && errors.username}</small>
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className={`form-control ${errors.password && touched.password ? "is-invalid" : ""}`} id="password" name='password' onBlur={handleBlur} onChange={handleChange} value={values.password} placeholder='+S1rr@hK66' />
                  <small className='text-danger'>{errors.password && touched.password && errors.password}</small>

                </div>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="form-check">
              <input className="form-check-input primary" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
              <label className="form-check-label text-dark" htmlFor="flexCheckChecked">
                Remeber this Device
              </label>
            </div>
            <a className="text-primary fw-medium" href="authentication-forgot-password.html">Forgot Password ?</a>
          </div>
          <button type='submit' className="btn btn-warning w-100 py-8 mb-4 rounded-2" id="close-button">Sign In</button>
        </form>
      </div>
    </div>
  </div>
</div>

    </div>
  </div>
</div>
<ErrorAlert heading="Invalid credentials!" msg="Username or Password is incorrect!" alert={alert} />
</>
  )
}

export default Signin