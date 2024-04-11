import React from 'react'

import {useRoutes} from "react-router-dom"

import authRoutes from "./authRoutes.jsx"

import Layout from "../layouts/layouts.jsx"

import Signin from "../components/pages/Signin/Signin.jsx"

const Router = () => {
  const router = useRoutes(
    [
      {
        path : "/",
        element : <Signin />
      },
      {
        path : "/auth",
        element : <Layout />,
        children : authRoutes
      },
    ]
  )
  return (
    (router)
  )
}

export default Router