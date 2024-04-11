import React from 'react'
import {useSelector} from "react-redux"
import { NavLink } from 'react-router-dom'

const Breadcrumbs = ({main_text, sub_text}) => {
  let state = useSelector(state=> state.admin)

  return (
    <>
     <div className="card bg-light-warning shadow-none position-relative overflow-hidden">
          <div className="card-body px-4 py-3">
            <div className="row align-items-center">
              <div className="col-9">
                <h4 className="fw-semibold mb-8">{main_text}</h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink className="text-muted text-decoration-none" to={`/auth/dashboard`}>Dashboard</NavLink></li>
                    <li className="breadcrumb-item" aria-current="page">{sub_text}</li>
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
    </>
  )
}

export default Breadcrumbs