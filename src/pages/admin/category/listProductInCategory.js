import React from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../config";
import { NavLink } from "react-router-dom";

const ListProductInCategory = (props) => {
  const onHandleRemove = (id) => {
    props.onDeleteProduct(id);
  };
  window.scrollTo(0, 0);
  const { id } = useParams();
  const result = props.products
    .filter((product) => product.category == id)
    .map((product, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>
            <div className="media">
              <div className="d-flex">
                <img
                  className="imgProduct"
                  src={`${API}/product/photo/${product._id}`}
                />
              </div>
              <div className="media-body">
                <h5>{product.name}</h5>
              </div>
            </div>
          </td>
          <td>
            <h5>
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "USD",
              }).format(product.price)}
            </h5>
          </td>
          <td>
            <h5>{product.quantity}</h5>
          </td>
          <td>
            <NavLink
              to={`/admin/product/${product._id}`}
              type="button"
              className="border-0 bg-light fas fa-pencil-alt text-decoration-none"
            ></NavLink>
            <button
              onClick={() => onHandleRemove(product._id)}
              type="button"
              className="border-0 bg-light far fa-trash-alt"
            ></button>
          </td>
        </tr>
      );
    });
  return (
    <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4 pt-60px">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">List products in category {id}</h1>
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
            <tbody>{result}</tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ListProductInCategory;
