import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { addTransaction } from "../../services/TransactionService";
const ShoppingCart = () => {
  let navigate = useNavigate();
  let state = useSelector((state) => state.productCart);
  const [newQty, setNewQty] = useState([[]]);
  const totalString = state.map((item) => {
    let defaultQuantity;
    switch (item.root_category) {
      case "Box":
        defaultQuantity = 15;
        break;
      case "Piece":
        defaultQuantity = 1;
        break;
      case "Dozone":
        defaultQuantity = 12;
        break;
      case "Katta":
        defaultQuantity = 30;
        break;
      default:
        defaultQuantity = 1; // Default quantity if no category matches
    }
    const totalPrice = item.price * defaultQuantity;
    return totalPrice.toString();
  });

  // Join all total prices with '+' separator
  const totalSumString = totalString.join(" + ");

  const totalQtyString = state.map((item) => {
    let defaultQuantity;
    switch (item.root_category) {
      case "Box":
        defaultQuantity = 15;
        break;
      case "Piece":
        defaultQuantity = 1;
        break;
      case "Dozone":
        defaultQuantity = 12;
        break;
      case "Katta":
        defaultQuantity = 30;
        break;
      default:
        defaultQuantity = 1; // Default quantity if no category matches
    }
    return defaultQuantity.toString();
  });

  // Join all total prices with '+' separator
  const totalSumQtyString = totalQtyString.join(" + ");

  let monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let formattedDate = () => {
    let date = new Date();
    let day = date.getDate();
    let month = monthArray[date.getMonth()];
    let year = date.getFullYear();
    return day + " " + month + " " + year;
  };

  let handleTransaction = async (action) => {
    let transaction = {
      date: "",
      price: "",
      qty: [20, 50],
      products: [],
      action: null,
      prevData: null,
    };
    // const totalSum = state.reduce((sum, product) => sum + product.price, 0);

    console.log(state);
    transaction = {
      action,
      price: totalSumString,
      qty,
      products: state,
      date: formattedDate(),
    };
    let response = await addTransaction(transaction);

    let status = response.status;

    if (status === 200) navigate("/auth/history");
  };

  const handleIncrement = (productId) => {
    setNewQty((prevQty) => ({
      ...prevQty,
      [productId]: (prevQty[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    if (newQty[productId] > 0) {
      setNewQty((prevQty) => ({
        ...prevQty,
        [productId]: prevQty[productId] - 1,
      }));
    }
  };

  const handleInputChange = (productId, value) => {
    setNewQty((prevQty) => ({
      ...prevQty,
      [productId]: value,
    }));
  };
  return (
    <>
      <div
        className="offcanvas offcanvas-end shopping-cart"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header py-4">
          <h5
            className="offcanvas-title fs-5 fw-semibold"
            id="offcanvasRightLabel"
          >
            Shopping Cart
          </h5>
          <span className="badge bg-primary rounded-4 px-3 py-1 lh-sm">
            {state?.length} new
          </span>
        </div>
        <div className="offcanvas-body h-100 px-4 pt-0" data-simplebar>
          <ul className="mb-0">
            {state?.map((product) => {
              return (
                <li className="pb-7" key={product?.name}>
                  <div className="d-flex align-items-center">
                    <img
                      src={product?.image}
                      width={95}
                      height={75}
                      className="rounded-1 me-9 flex-shrink-0"
                      alt={product?.name}
                    />
                    <div>
                      <h6 className="mb-1">{product?.name}</h6>
                      <p className="mb-0 text-muted fs-2">
                        {product?.category}
                      </p>
                      <div className="d-flex align-items-center justify-content-between mt-2">
                        <h6 className="fs-2 fw-semibold mb-0 text-muted me-4">
                          ₹{product?.price}
                        </h6>
                        <div className="input-group input-group-sm w-50">
                          <button
                            className="btn border-0 round-20 minus p-0 bg-light-success text-success"
                            type="button"
                            id={`minus_${product?._id}`}
                            onClick={() => handleDecrement(product?._id)}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="form-control round-20 bg-transparent text-muted fs-2 border-0 text-center qty"
                            placeholder=""
                            aria-label="Quantity"
                            aria-describedby={`minus_${product?._id}`}
                            value={newQty[product?._id] || 0}
                            onChange={(e) =>
                              handleInputChange(product?._id, e.target.value)
                            }
                          />
                          <button
                            className="btn text-success bg-light-success p-0 round-20 border-0 add"
                            type="button"
                            id={`add_${product?._id}`}
                            onClick={() => handleIncrement(product?._id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="align-bottom">
            <div className="d-flex align-items-center pb-7">
              <span className="text-dark fs-3">QTY(N)</span>
              <div className="ms-auto">
                <span className="text-dark fw-semibold fs-3">
                  {totalSumQtyString}
                </span>
              </div>
            </div>
            <div className="d-flex align-items-center pb-7">
              <span className="text-dark fs-3">Price(₹)</span>
              <div className="ms-auto">
                <span className="text-dark fw-semibold fs-3">
                  {totalSumString}
                </span>
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <button
                type="button"
                class="btn btn-outline-primary flex-grow-1 me-2"
                onClick={() => handleTransaction(0)}
              >
                Buy
              </button>
              <button
                type="button"
                class="btn btn-outline-success flex-grow-1 ms-2"
                onClick={() => handleTransaction(1)}
              >
                Sell
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
