import React, { useState, useEffect } from 'react'
import Header from '../../shared/Header'
import Sidebar from '../../shared/Sidebar'
import Breadcrumbs from '../../shared/Breadcrumbs'
import ShoppingCart from "../../shared/ShoppingCart"
import SearchModal from "../../shared/SearchModal"
import { getProductById, setProductQty } from '../../../services/ProductService'
import { NavLink, useParams } from 'react-router-dom'
import ErrorAlert from "../../shared/ErrorAlert"
import SuccessAlert from "../../shared/SuccessAlert"
const BuySell = () => {
  let [quantity, setQuantity] = useState(1)
  let [alert, setAlert] = useState(false)
  let [successAlert, setSuccessAlert] = useState(false)

  let [alertMsg, setAlertMsg] = useState("")
  let [successAlertMsg, setSuccessAlertMsg] = useState({
    heading : "",
    msg : ""
  })

  let id = useParams().id
  let [currentProduct, setCurrentProduct] = useState({})
  let getProductByIdFun = async () => {
    let current_product = await getProductById(id)
    setCurrentProduct(current_product?.data?.data)
  }
  
  
  useEffect(()=> {
    getProductByIdFun()
  }, [])


  let buySellFun = async (action, id) => {
let send_obj = {
  quantity,
  action
}

try {
  
let quantity_updated = await setProductQty(id, send_obj)
let data = quantity_updated?.data?.data
if(quantity_updated?.status === 200) {
setCurrentProduct(data)
setAlert(false)
setAlertMsg("")
setSuccessAlert(true)
''
if(action === "buy") 
setSuccessAlertMsg({heading : "Product Bought", msg : "Product bought successfully!"})
else 
setSuccessAlertMsg({heading : "Product Selled", msg : "Product selled successfully!"})
  } 
}catch(err) {
  if(err.response.status === 406) {
  let data = err.response.data.data
      setAlert(true)
      setAlertMsg(data)
      
      setTimeout(() => {
        setAlert(false)
      setAlertMsg("")
      }, 5000);
    }
}

}
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
   <Breadcrumbs main_text="Buy / Sell product" sub_text="Product" />
  <div className="card shadow-none border">
  <div className="card-body p-4">
    <div className="row">
      <div className="col-lg-6">
        <div id="sync1" className="owl-carousel owl-theme owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: 12665}}>
              <div className="owl-item cloned active" style={{width: '400px'}}><div className="item rounded overflow-hidden">
                  <img src={currentProduct?.image} alt={currentProduct?.name} className="img-fluid" />
                </div></div>
                </div></div>
                </div>
        
      </div>
      <div className="col-lg-6">
        <div className="shop-content">
          <div className="d-flex align-items-center gap-2 mb-2">
            <span className={`badge text-bg-${currentProduct?.quantity === 0 ? "danger" : "success"} fs-2 fw-semibold rounded-3`}>{currentProduct?.quantity === 0 ? "Out of Stock" : "In Stock"}</span>
            <span className="fs-2">{currentProduct?.category}</span>
          </div>
          <h4 className="fw-semibold">{currentProduct?.name} <NavLink className="text-secondary" to={`/auth/product/edit/${id}`} ><i className="ti ti-pencil fs-4" /></NavLink></h4>
          {/* <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex arcu, tincidunt bibendum felis.</p> */}
          <h4 className="fw-semibold mb-3"><del className="fs-5 text-muted">₹{currentProduct?.price + 200}</del> ₹{currentProduct?.price}</h4>
          <div className="d-flex align-items-center gap-8 pb-4 border-bottom">
            <ul className="list-unstyled d-flex align-items-center mb-0">
              <li><a className="me-1" href="javascript:void(0)"><i className="ti ti-star-filled text-warning fs-4" /></a></li>
              <li><a className="me-1" href="javascript:void(0)"><i className="ti ti-star-filled text-warning fs-4" /></a></li>
              <li><a className="me-1" href="javascript:void(0)"><i className="ti ti-star-filled text-warning fs-4" /></a></li>
              <li><a className="me-1" href="javascript:void(0)"><i className="ti ti-star text-warning fs-4" /></a></li>
              <li><a className href="javascript:void(0)"><i className="ti ti-star text-warning fs-4" /></a></li>
            </ul>
            <a href="javascript:void(0)" className='text-secondary'>(236 reviews)</a>
          </div>

          <div className="d-flex align-items-center gap-7 pb-7 mb-7 border-bottom">
            <h6 className="mb-0 fs-4 fw-semibold">QTY:</h6>

          <p className="mt-3">{currentProduct?.quantity}</p>
            <div className="input-group input-group-sm rounded">
              <button className="btn minus min-width-40 py-0 border-end border-secondary fs-5 border-end-0 text-secondary" type="button" id="add1"  onClick={()=> quantity > 0 && setQuantity(quantity - 1)}><i className="ti ti-minus" /></button>
              <input type="text" className="min-width-40 flex-grow-0 border border-secondary text-secondary fs-4 fw-semibold form-control text-center qty" placeholder name="quantity" namaria-label="Example text with button addon" aria-describedby="add1" value={quantity}   onChange={(e) => {
            const newValue = e.target.value.trim();
            if (newValue === "") {
                setQuantity(0);
            } else {
                const parsedValue = parseInt(newValue);
                if (!isNaN(parsedValue) && parsedValue <= 1000) {
                    setQuantity(parsedValue);
                }
            }
        }}    />
              <button className="btn min-width-40 py-0 border border-secondary fs-5 border-start-0 text-secondary add" type="button" id="addo2" onClick={() => quantity < 1000 && setQuantity(quantity + 1)}><i className="ti ti-plus" /></button>
            </div>
          </div>
          <div className="d-sm-flex align-items-center gap-3 pt-8 mb-7">
            <a href="javascript:void(0)" className="btn d-block btn-danger px-7 py-8" onClick={()=> buySellFun("buy", currentProduct?._id)}>Buy </a>
            <a href="javascript:void(0)" className="btn d-block btn-primary px-5 py-8 mb-2 mb-sm-0" onClick={()=> buySellFun("sell", currentProduct?._id)}>Sell</a>
          </div>
          {/* <p className="mb-0">Dispatched in 2-3 weeks</p>
          <a href="javascript:void(0)">Why the longer time for delivery?</a> */}
        </div>
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
<ErrorAlert heading="Invalid quantity entered!" msg={alertMsg} alert={alert} />
<SuccessAlert heading={successAlertMsg.heading} msg={successAlertMsg.msg} alert={successAlert} />

    </>
  )
}

export default BuySell