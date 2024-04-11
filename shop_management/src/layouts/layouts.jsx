import React, { useEffect } from 'react'
import {Outlet, useNavigate} from "react-router-dom"

const Layouts = () => {
    let navigate = useNavigate()
    let allCookies = document.cookie;
    useEffect(() => {
let token = allCookies.split("=")[1]
if(!token) {
navigate("/")
}
    }, [allCookies])
    
  return (
    <>
    <Outlet />
    </>
  )
}

export default Layouts