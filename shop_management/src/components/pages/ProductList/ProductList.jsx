import React, { useState ,useEffect} from 'react'
import Header from '../../shared/Header'
import Sidebar from '../../shared/Sidebar'
import Breadcrumbs from '../../shared/Breadcrumbs'
import ShoppingCart from "../../shared/ShoppingCart"
import SearchModal from "../../shared/SearchModal"

import {NavLink} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {getProducts} from "../../../services/ProductService"

import {productRed}  from "../../../redux/productListReducer"
import {productCartRed}  from "../../../redux/ProductAddToCartReducer"

import DangerModal from '../../shared/DangerModal'

const ProductList = () => {
  let dispatch = useDispatch()
  // let [state2, setstate2] = useState([])
  let state = useSelector(state=> state.admin)
  let state2 = useSelector(state=> state.product)
  let state3 = useSelector((state) => state.productCart);

  let [searchQuery, setSearchQuery] = useState("");

  const [sortOption, setSortOption] = useState("");
  const [currentItemToDelete, setCurrentItemToDelete] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [currentItemToCart, setCurrentItemToCart] = useState([]);
  let rows_per_page = 5;

  const fetchAllProduct = async () => {
    let all_data = await getProducts();
    if (all_data?.status === 200)
      if (state2?.length === 0) dispatch(productRed(all_data?.data?.data));
      else dispatch(productRed([]));
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const sortProducts = () => {
    if (sortOption === "name") {
      return state2.slice().sort((a, b) => a.name.localeCompare(b.name)); // Sort by name from a to z
    } else if (sortOption === "category") {
      const sortedCategories = [
        ...new Set(state2.map((product) => product.category)),
      ].sort();
      const sortedProducts = [];
      sortedCategories.forEach((category) => {
        const categoryProducts = state2
          .filter((product) => product.category === category)
          .sort((a, b) => a.name.localeCompare(b.name));
        sortedProducts.push(...categoryProducts); // Sort by category
      });
      return sortedProducts;
    } else if (sortOption === "root_category") {
      const sortedCategories = [
        ...new Set(state2.map((product) => product.root_category)),
      ].sort();
      const sortedProducts = [];
      sortedCategories.forEach((root_category) => {
        const categoryProducts = state2
          .filter((product) => product.root_category === root_category)
          .sort((a, b) => a.name.localeCompare(b.name));
        sortedProducts.push(...categoryProducts); // Sort by root_category
      });
      return sortedProducts;
    } else if (sortOption === "quantity") {
      return state2.slice().sort((a, b) => b.quantity - a.quantity); // Sort by quantity from high to low
    } else if (sortOption === "price") {
      return state2.slice().sort((a, b) => b.price - a.price); // Sort by price from high to low
    } else if (sortOption === "stock") {
      const inStock = state2.filter((item) => item.quantity !== 0);
      const outOfStock = state2.filter((item) => item.quantity === 0);
      return [...inStock, ...outOfStock]; // Products in stock first, followed by out of stock products
    }
    return state2; // Default order
  };
  const checkAllItems = (isChecked) => {
    setSelectAllChecked(isChecked);
    if (isChecked) {
      const itemCart = state2.map((item) => (item));
      const updatedItems = state2.map((item) => ({ item, state: true }));
      setCurrentItemToDelete(updatedItems);
      setCurrentItemToCart(itemCart)
    } else {
      setCurrentItemToDelete([]);
      setCurrentItemToCart([])
    }
  };
  const checkItemToDelete = (item, isChecked) => {
    let updatedItems;
    let updatedCart;

    if (isChecked) {
      updatedItems = [...currentItemToDelete, { item, state: true }];
      updatedCart = [...currentItemToCart, item];
    } else {
      updatedItems = currentItemToDelete.filter(
        (currItem) => currItem.item._id !== item._id
      );
      updatedCart = currentItemToCart.filter(
        (currItem) => currItem._id !== item._id
      );
    }
    setCurrentItemToDelete(updatedItems);
    setCurrentItemToCart(updatedCart
      );

    const allChecked = state2.every((product) =>
      updatedItems.some((item) => item.item._id === product._id)
    );
    setSelectAllChecked(allChecked);
  };
  return (
    <>
      {/* Preloader */}
      {/* <div className="preloader">
    <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/favicon.ico" alt="loader" className="lds-ripple img-fluid" />
  </div> */}
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
            <Breadcrumbs main_text="My Shop" sub_text="Shop" />
            {state2.length === 0 ? (
              <div class="row justify-content-center w-100">
                <div className="col-lg-4">
                  <div className="text-center">
                    {/* <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/backgrounds/errorimg.svg" alt className="img-fluid" width={500} /> */}
                    <h1 className="fw-semibold mb-7 fs-9">Opps!!!</h1>
                    <h4 className="fw-semibold mb-7">
                      Your product list is empty yet!!!
                    </h4>
                    <NavLink
                      className="btn btn-warning"
                      to={`/auth/product/add`}
                      role="button"
                    >
                      Go to Add Product
                    </NavLink>
                  </div>
                </div>
              </div>
            ) : (
              <div className="product-list">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="d-flex justify-content-between align-items-center mb-9">
                      <form className="position-relative">
                        <input
                          type="text"
                          className="form-control search-chat py-2 ps-5"
                          id="text-srh"
                          placeholder="Search Product"
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3" />
                      </form>
                      <div className="d-flex">
                        {currentItemToDelete?.length !== 0 ? (
                          <>
                            <a
                              className="fs-6 text-muted pe-2"
                              href="javascript:void(0)"
                            >
                              <i
                                className="ti ti-trash"
                                data-bs-toggle="modal"
                                data-bs-target="#al-danger-alert"
                              />
                            </a>
                            <a
                              className="fs-6 text-muted"
                              href="javascript:void(0)"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              onClick={() =>
                                dispatch(productCartRed(currentItemToCart))
                              }>
                              <i
                                className="ti ti-shopping-cart"
                              />
                            </a>
                          </>
                        ) : null}
                      </div>
                      <a
                        className="fs-6 text-muted"
                        href="javascript:void(0)"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ti ti-filter" />
                      </a>
                      <ul className="dropdown-menu" style={{}}>
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => handleSortChange("name")}
                          >
                            Name
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => handleSortChange("category")}
                          >
                            Category
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => handleSortChange("root_category")}
                          >
                            Category type
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => handleSortChange("quantity")}
                          >
                            quantity
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => handleSortChange("price")}
                          >
                            Price
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => handleSortChange("stock")}
                          >
                            Stock
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="table-responsive border rounded">
                      <table className="table align-middle text-nowrap mb-0">
                        <thead>
                          <tr>
                            <th scope="col">
                              <div className="form-check">
                                <input
                                  className="form-check-input pointer"
                                  type="checkbox"
                                  defaultValue
                                  id="selectAllCheckbox"
                                  onChange={(e) =>
                                    checkAllItems(e.target.checked)
                                  }
                                  checked={selectAllChecked}
                                />
                              </div>
                            </th>
                            <th scope="col">Products</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {searchQuery?.length === 0
                            ? sortProducts()?.map((product) => (
                                <tr key={product?.name}>
                                  <td>
                                    <div className="form-check mb-0">
                                      <input
                                        className="form-check-input pointer"
                                        type="checkbox"
                                        defaultValue
                                        id={`checkbox-${product._id}`}
                                        onChange={(e) =>
                                          checkItemToDelete(
                                            product,
                                            e.target.checked
                                          )
                                        }
                                        checked={currentItemToDelete.some(
                                          (item) =>
                                            item.item._id === product._id
                                        )}
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src={product?.image}
                                        className="rounded-circle"
                                        alt={product?.name}
                                        width={56}
                                        height={56}
                                      />
                                      <div className="ms-3">
                                        <h6 className="fw-semibold mb-0 fs-4">
                                          {product?.name}
                                        </h6>
                                        <p className="mb-0">
                                          {product?.category}
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <p className="mb-0">{product?.date}</p>
                                  </td>
                                  <td>
                                    {product?.quantity !== 0 ? (
                                      <div className="d-flex align-items-center">
                                        <span className="bg-success p-1 rounded-circle" />
                                        <p className="mb-0 ms-2">InStock</p>
                                      </div>
                                    ) : (
                                      <div className="d-flex align-items-center">
                                        <span className="bg-danger p-1 rounded-circle" />
                                        <p className="mb-0 ms-2">
                                          Out of Stock
                                        </p>
                                      </div>
                                    )}
                                  </td>
                                  <td>
                                    <h6 className="mb-0 fs-4">
                                      {product?.quantity}
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="mb-0 fs-4">
                                      ₹{product?.price}
                                    </h6>
                                  </td>
                                  <td>
                                    <NavLink
                                      className="fs-6 text-muted me-2"
                                      to={`/auth/product/edit/${product?._id}`}
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      data-bs-title="Edit"
                                    >
                                      <i className="ti ti-dots-vertical" />
                                    </NavLink>
                                    <NavLink
                                      className="fs-6 text-muted"
                                      to={`/auth/product/qty/${product?._id}`}
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      data-bs-title="Qty"
                                    >
                                      <i className="ti ti-packages" />
                                    </NavLink>
                                  </td>
                                </tr>
                              ))
                            : sortProducts()
                                ?.filter(
                                  (product) =>
                                    product.name
                                      .toLowerCase()
                                      .includes(searchQuery.toLowerCase()) ||
                                    product.category
                                      .toLowerCase()
                                      .includes(searchQuery.toLowerCase()) ||
                                    product.price
                                      .toString()
                                      .includes(searchQuery.toLowerCase()) ||
                                    product.quantity
                                      .toString()
                                      .includes(searchQuery.toLowerCase())
                                )
                                .map((filteredProduct) => (
                                  <tr key={filteredProduct?.name}>
                                    <td>
                                      <div className="form-check mb-0">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          defaultValue
                                          id={`checkbox-${filteredProduct._id}`}
                                          onChange={(e) =>
                                            checkItemToDelete(
                                              filteredProduct,
                                              e.target.checked
                                            )
                                          }
                                          checked={currentItemToDelete.some(
                                            (item) =>
                                              item.item._id ===
                                              filteredProduct._id
                                          )}
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <img
                                          src={filteredProduct?.image}
                                          className="rounded-circle"
                                          alt={filteredProduct?.name}
                                          width={56}
                                          height={56}
                                        />
                                        <div className="ms-3">
                                          <h6 className="fw-semibold mb-0 fs-4">
                                            {filteredProduct?.name}
                                          </h6>
                                          <p className="mb-0">
                                            {filteredProduct?.category}
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <p className="mb-0">
                                        {filteredProduct?.date}
                                      </p>
                                    </td>
                                    <td>
                                      {filteredProduct?.quantity !== 0 ? (
                                        <div className="d-flex align-items-center">
                                          <span className="bg-success p-1 rounded-circle" />
                                          <p className="mb-0 ms-2">InStock</p>
                                        </div>
                                      ) : (
                                        <div className="d-flex align-items-center">
                                          <span className="bg-danger p-1 rounded-circle" />
                                          <p className="mb-0 ms-2">
                                            Out of Stock
                                          </p>
                                        </div>
                                      )}
                                    </td>
                                    <td>
                                      <h6 className="mb-0 fs-4">
                                        {filteredProduct?.quantity}
                                      </h6>
                                    </td>
                                    <td>
                                      <h6 className="mb-0 fs-4">
                                        ₹{filteredProduct?.price}
                                      </h6>
                                    </td>
                                    <td>
                                      <NavLink
                                        className="fs-6 text-muted me-2"
                                        to={`/auth/product/edit/${filteredProduct?._id}`}
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Edit"
                                      >
                                        <i className="ti ti-dots-vertical" />
                                      </NavLink>
                                      <NavLink
                                        className="fs-6 text-muted"
                                        to={`/auth/product/qty/${filteredProduct?._id}`}
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Qty"
                                      >
                                        <i className="ti ti-packages" />
                                      </NavLink>
                                    </td>
                                  </tr>
                                ))}
                        </tbody>
                      </table>
                      <div className="d-flex align-items-center justify-content-end py-1">
                        <p className="mb-0 fs-2">Rows per page:</p>
                        <select
                          className="form-select w-auto ms-0 ms-sm-2 me-8 me-sm-4 py-1 pe-7 ps-2 border-0"
                          aria-label="Default select example"
                        >
                          <option selected value={5}>
                            {rows_per_page}
                          </option>
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                        </select>
                        <p className="mb-0 fs-2">1–5 of {state2?.length}</p>
                        <nav aria-label="...">
                          <ul className="pagination justify-content-center mb-0 ms-8 ms-sm-9">
                            <li className="page-item p-1">
                              <a
                                className="page-link border-0 rounded-circle text-dark fs-6 round-32 d-flex align-items-center justify-content-center"
                                href="#"
                              >
                                <i className="ti ti-chevron-left" />
                              </a>
                            </li>
                            <li className="page-item p-1">
                              <a
                                className="page-link border-0 rounded-circle text-dark fs-6 round-32 d-flex align-items-center justify-content-center"
                                href="#"
                              >
                                <i className="ti ti-chevron-right" />
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <div className="dark-transparent sidebartoggler" /> */}
        {/* <div className="dark-transparent sidebartoggler" /> */}
      </div>
      {/*  Shopping Cart */}
      <ShoppingCart />
      {/*  Search Bar */}
      <SearchModal />
      <DangerModal
        item={currentItemToDelete.length > 0 ? currentItemToDelete : []}
      />
    </>
  );
}

export default ProductList