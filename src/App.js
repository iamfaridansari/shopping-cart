import React, { useState, useEffect } from "react";
import "./App.css";
import { foodItems } from "./components/dataBase";
import { useCart } from "react-use-cart";

function App() {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    if (theme === true) {
      document.body.style.background = "#212529";
    } else {
      document.body.style.background = "#fff";
    }
  }, [theme]);

  const {
    cartTotal,
    isEmpty,
    items,
    totalItems,
    addItem,
    removeItem,
    updateItemQuantity,
    emptyCart,
  } = useCart();

  return (
    <>
      {/* navbar */}
      <nav
        className={
          theme
            ? "container bg-dark text-white p-2 rounded shadow my-2 d-flex align-items-center justify-content-between"
            : "container bg-white p-2 rounded shadow my-2 d-flex align-items-center justify-content-between"
        }
      >
        <h5 className="m-0">
          Food Hub <i className="fas fa-home"></i>
        </h5>
        <div className="d-flex align-items-center justify-content-center">
          <i
            className={theme ? "fas fa-sun fs-5 me-2" : "fas fa-moon fs-5 me-2"}
            onClick={() => setTheme(!theme)}
          ></i>
          <h5 className="m-2">
            <span className="badge bg-primary">
              <i className="fas fa-shopping-cart"></i>
              {totalItems}
            </span>
          </h5>
          <h5 className="m-2">
            <span className="badge bg-primary">Total Rs.{cartTotal}</span>
          </h5>
        </div>
      </nav>

      {/* container */}
      <div className="container mt-4">
        <h1 className={theme ? "text-center text-white" : "text-center"}>
          Products
        </h1>
        <div className="row justify-content-between">
          {foodItems.map((item) => {
            return (
              <div
                className={
                  theme
                    ? "bg-dark text-white shadow rounded col-lg-5 m-2 py-2 d-flex align-items-center justify-content-around"
                    : "bg-white shadow rounded col-lg-5 m-2 py-2 d-flex align-items-center justify-content-around"
                }
                key={item.id}
              >
                <i className={item.img}></i>
                <div className="details d-flex align-items-center justify-content-center flex-column">
                  <h3>{item.name}</h3>
                  <h5>Rs.{item.price}</h5>
                </div>
                <button
                  className="btn btn-success bg-gradient"
                  onClick={() => addItem(item)}
                >
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <hr />

      {/* cart */}
      <div className="container my-4">
        <h1 className={theme ? "text-center text-white" : "text-center"}>
          Cart
        </h1>
        {isEmpty ? (
          <h3 className={theme ? "text-center text-white" : "text-center"}>
            No item in the cart
          </h3>
        ) : (
          <>
            <table
              className={
                theme ? "table table-dark table-hover" : "table table-hover"
              }
            >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>Rs.{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm bg-gradient"
                          onClick={() => removeItem(item.id)}
                        >
                          <i className="fas fa-times"></i>
                        </button>
                        <div className="btn-group m-2">
                          <button
                            className="btn btn-warning text-white bg-gradient btn-sm"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <button
                            className="btn btn-success bg-gradient btn-sm"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="text-center">
              <button
                className="btn btn-danger bg-gradient"
                onClick={() => emptyCart()}
              >
                Empty Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
// http://192.168.43.196:3000
