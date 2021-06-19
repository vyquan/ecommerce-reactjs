import React from "react";
import { API } from "../../../config";
import { NavLink } from "react-router-dom";

const ListProduct = (props) => {
  const onHandleRemove = (id) => {
    props.onDeleteProduct(id);
  };
  window.scrollTo(0, 0);
  return (
    <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">List Products</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <NavLink
              type="button"
              className="gray_btn text-decoration-none"
              to="/admin/product/add"
            >
              Create <i class="fas fa-plus"></i>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="cart_inner">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Setting</th>
              </tr>
            </thead>
            <tbody>
              {props.products.map((item, index)  => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="media">
                      <div className="d-flex">
                        <img
                          className="imgProduct"
                          src={`${API}/product/photo/${item._id}`}
                        />
                      </div>
                      <div className="media-body">
                        <h5>{item.name}</h5>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>$ {new Intl.NumberFormat().format(item.price)}</h5>
                  </td>
                  <td>
                    <h5>{item.quantity}</h5>
                  </td>
                  <td>
                    <NavLink
                    to={`/admin/product/${item._id}`}
                      type="button"
                      className="border-0 bg-light fas fa-pencil-alt text-decoration-none"
                    >
                    </NavLink>
                    <button
                      onClick={() => onHandleRemove(item._id)}
                      type="button"
                      className="border-0 bg-light far fa-trash-alt"
                    ></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ListProduct;
