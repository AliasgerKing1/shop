import React, { useState } from 'react'

import Header from '../../shared/Header'
import Sidebar from '../../shared/Sidebar'

import {NavLink, useParams} from "react-router-dom"
import { useFormik } from 'formik'

import productSchema from "../../../schemas/ProductSchema"
import Breadcrumbs from '../../shared/Breadcrumbs'
import ShoppingCart from "../../shared/ShoppingCart"
import SearchModal from "../../shared/SearchModal"

import {addProduct} from "../../../services/ProductService"
import SuccessAlert from '../../shared/SuccessAlert'


const AddProduct = () => {
  let [showAlert, setShowAlert] = useState(false)
  let [image, setImage] = useState(null)
  let [rootCategorySelected, setRootCategorySelected] = useState(false)
  let category_lst = ["Instant (Noodles)","Spices (Masala)", "Cleaning (Safai)", "Cooking oil (khullu tel)", "Hair oil (matha nu tail)", "Hardware (khila etc)", "Ropes (Rassi)", "Footwear (Juta)", "Paint (Colour)", "Dry fruits (Kaju-Badam)", "Pulses (daal)", "Grains (Aato etc)", "Tea (Chai)", "Stationay (Pencil-eraser etc)"]
  
  let rootCategoryLst = ["Piece","Pack","Kg", "Dozone", "Box", "Katta"]
// Define your initial values based on whether it's an add operation
let initialValues = {
  name: '',
  size: '',
  price: '',
  bprice: '',
  category: '',
  quantity: '',
  image: '',
  root_category : ""
};


  let {values, handleBlur, handleChange, handleSubmit, errors, touched, handleReset} = useFormik({
    initialValues : initialValues,
 validationSchema : productSchema,
 onSubmit : async (values)=> {

  function getCurrentDate() {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    const currentDate = new Date();
    const day = days[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    return `${day}, ${month} ${date} ${year}`;
  }
    
  values.price = parseInt(values.price)
  values.size = parseInt(values.size)
  values.quantity = parseInt(values.quantity)
  values.image = ""
  values.date = getCurrentDate()
  const formData = new FormData();
formData.append('data', JSON.stringify(values));
formData.append('file', image);

  let product_response = await addProduct(formData)
  if (product_response?.status === 200) {
    setShowAlert(true)
    handleReset(); 
    setTimeout(()=> {
    setShowAlert(false)
    }, 3000)
  } else {
    setShowAlert(false)
  }
 }
  })

  let addImage = async (image)=> {
    setImage(image)
// console.log(image)
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
   <Breadcrumbs main_text="Add Product" sub_text="Product" />
      <div className='card'>
  <div className="card-body p-4">
  <div className="tab-content" id="pills-tabContent">
  <form onSubmit={handleSubmit} encType='multipart/form-data'>
    <div className="tab-pane fade show active" id="pills-personal-info" role="tabpanel" aria-labelledby="pills-personal-info-tab" tabIndex={0}>
      <div className="row">
        <div className="col-lg-6">
        <div className="mb-4 row align-items-center">
            <label htmlFor="category" className="form-label fw-semibold col-sm-3 col-form-label">Root Category</label>
            <div className="col-sm-9">
              <select className={`form-select ${errors.root_category && touched.root_category ? "is-invalid" : ""}`}  onChange={(e) => {
    handleChange(e); // <-- Pass event to handleChange
    setRootCategorySelected(e.target.value !== "selected"); // <-- Update state based on selection
  }} onBlur={handleBlur} name='root_category' aria-label="Default select example">
                <option selected value={"selected"}>Select</option>
                {rootCategoryLst?.map((item) => (
                <option selected={values.root_category === item && true} value={item}>{item}</option>
                ))}
              </select>
              <div>{touched.root_category && errors.root_category ? (<small className='text-danger'>{errors.root_category}</small>) : null}</div>

            </div>
          </div>
          
          <div className="mb-4 row align-items-center">
            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold col-sm-3 col-form-label">Name</label>
            <div className="col-sm-9">
              <input type="text" className={`form-control ${errors.name && touched.name ? "is-invalid" : ""}`} id="name" placeholder="Chili" onChange={handleChange} onBlur={handleBlur} name='name' value={values.name} disabled={rootCategorySelected ? false : true} />
              <div>{touched.name && errors.name ? (<small className='text-danger'>{errors.name}</small>) : null}</div>
            </div>
          </div>
          
          <div className="mb-4 row align-items-center">
            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold col-sm-3 col-form-label">Quantity</label>
            <div className="col-sm-9">
              <input type="number" id="quantity" placeholder="20" className={`form-control ${errors.quantity && touched.quantity ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} name='quantity' value={values.quantity} disabled={rootCategorySelected ? false : true} />
              <div>{touched.quantity && errors.quantity ? (<small className='text-danger'>{errors.quantity}</small>) : null}</div>

            </div>
          </div>
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-9">
              <div className="d-flex align-items-center gap-3">
                <button className="btn btn-warning" type='submit'>Add</button>
                <button className="btn btn-light-danger text-danger" type="reset">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
        <div className="mb-4 row align-items-center">
            <label htmlFor="category" className="form-label fw-semibold col-sm-3 col-form-label">Category</label>
            <div className="col-sm-9">
              <select className={`form-select ${errors.category && touched.category ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} name='category' aria-label="Default select example" disabled={rootCategorySelected ? false : true}>
                <option selected>Select</option>
                {category_lst?.map((item) => (
                <option selected={values.category === item && true} value={item}>{item}</option>
                ))}
              </select>
              <div>{touched.category && errors.category ? (<small className='text-danger'>{errors.category}</small>) : null}</div>

            </div>
          </div>
          <div className="mb-4 row align-items-center">
            <label htmlFor="price" className="form-label fw-semibold col-sm-3 col-form-label">Price</label>
            <div className="col-sm-9">
              <input type="number" className={`form-control ${errors.price && touched.price ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} name='price' value={values.price} id="price" placeholder="100" disabled={rootCategorySelected ? false : true} />
              <div>{touched.price && errors.price ? (<small className='text-danger'>{errors.price}</small>) : null}</div>

            </div>
          </div>
          <div className="mb-4 row align-items-center">
            <label htmlFor="bprice" className="form-label fw-semibold col-sm-3 col-form-label">Buy Price</label>
            <div className="col-sm-9">
              <input type="number" className={`form-control ${errors.bprice && touched.bprice ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} name='bprice' value={values.bprice} id="bprice" placeholder="100" disabled={rootCategorySelected ? false : true} />
              <div>{touched.bprice && errors.bprice ? (<small className='text-danger'>{errors.bprice}</small>) : null}</div>

            </div>
          </div>
          <div className="mb-4 row align-items-center">
            <label htmlFor="size" className="form-label fw-semibold col-sm-3 col-form-label">Size</label>
            <div className="col-sm-9">
              <select className={`form-select ${errors.size && touched.size ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} name='size' aria-label="Default select example" disabled={rootCategorySelected ? false : true} >
                <option selected value={0}>Select</option>
                <option selected={values.size === 1 && true} value={1}>Extra Small</option>
                <option selected={values.size === 2 && true} value={2}>Small</option>
                <option selected={values.size === 3 && true} value={3}>General</option>
                <option selected={values.size === 4 && true} value={4}>Medium</option>
                <option selected={values.size === 5 && true} value={5}>Regular</option>
                <option selected={values.size === 6 && true} value={6}>Large</option>
                <option selected={values.size === 7 && true} value={7}>Extra Large</option>
                <option selected={values.size === 8 && true} value={8}>Extreme</option>
              </select>
              <div>{touched.size && errors.size ? (<small className='text-danger'>{errors.size}</small>) : null}</div>

            </div>
          </div>
          <div className="mb-4 row align-items-center">
            <label htmlFor="image" className="form-label fw-semibold col-sm-3 col-form-label">Product Image</label>
            <div className="col-sm-9">
          <input class="form-control" type="file" id="formFile" name='image' onChange={(e) => addImage( e.target.files && e.target.files[0])} disabled={rootCategorySelected ? false : true} />
          </div>
          </div>
        </div>
      </div>
    </div>
    </form>

    <div className="tab-pane fade" id="pills-account-details" role="tabpanel" aria-labelledby="pills-account-details-tab" tabIndex={0}>
      <div className="row">
        <div className="col-lg-6">
          <div className="mb-4 row align-items-center">
            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold col-sm-3 col-form-label">Full Name</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="exampleInputtext" placeholder="John.Deo" />
            </div>
          </div>
          <div className="mb-4 row align-items-center">
            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold col-sm-3 col-form-label">Password</label>
            <div className="col-sm-9">
              <div className="input-group border rounded-1">
                <input type="password" className="form-control border-0" id="inputPassword" placeholder="John Deo" />
                <span className="input-group-text bg-transparent px-6 border-0" id="basic-addon1">
                  <i className="ti ti-eye fs-6" />
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-9">
              <div className="d-flex align-items-center gap-3">
                <button className="btn btn-warning">Submit</button>
                <button className="btn btn-light-danger text-danger">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-4 row align-items-center">
            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold col-sm-3 col-form-label">Email</label>
            <div className="col-sm-9">
              <div className="input-group border rounded-1">
                <input type="text" className="form-control border-0" placeholder="John Deo" />
                <span className="input-group-text bg-transparent px-6 border-0" id="basic-addon1">@example.com</span>
              </div>
            </div>
          </div>
          <div className="mb-4 row align-items-center">
            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold col-sm-3 col-form-label">Confirm</label>
            <div className="col-sm-9">
              <div className="input-group border rounded-1">
                <input type="password" className="form-control border-0" id="inputPassword" placeholder="John Deo" />
                <span className="input-group-text bg-transparent px-6 border-0" id="basic-addon1">
                  <i className="ti ti-eye fs-6" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="tab-pane fade" id="pills-social-links" role="tabpanel" aria-labelledby="pills-social-links-tab" tabIndex={0}>
      <div className="row">
        <div className="col-lg-6">
          <div className="mb-4 row align-items-center">
            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold col-sm-3 col-form-label">Twitter</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="exampleInputtext" placeholder="https://twitter.com/abc" />
            </div>
          </div>
          <div className="mb-4 row align-items-center">
            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold col-sm-3 col-form-label">Google</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="exampleInputtext" placeholder="https://plus.google.com/abc" />
            </div>
          </div>
          <div className="mb-4 row align-items-center">
            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold col-sm-3 col-form-label">Instagram</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="exampleInputtext" placeholder="https://instagram.com/abc" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-9">
              <div className="d-flex align-items-center gap-3">
                <button className="btn btn-warning">Submit</button>
                <button className="btn btn-light-danger text-danger">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-4 row align-items-center">
            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold col-sm-3 col-form-label">Facebook</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="exampleInputtext" placeholder="https://facebook.com/abc" />
            </div>
          </div>
          <div className="mb-4 row align-items-center">
            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold col-sm-3 col-form-label">Linkedin</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="exampleInputtext" placeholder="https://linkedin.com/abc" />
            </div>
          </div>
          <div className="mb-4 row align-items-center">
            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold col-sm-3 col-form-label">Quora</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="exampleInputtext" placeholder="https://quora.com/abc" />
            </div>
          </div>
        </div>
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
  {showAlert && (<SuccessAlert heading="Product Added!" msg={"New product is added!"} alert={alert} />)}
  
    </>
  )
}

export default AddProduct