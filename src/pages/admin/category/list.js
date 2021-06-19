import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const ListCategory = (props) => {
  const onHandleRemove = (id) => {
    props.onDeleteCategory(id);
  };
  window.scrollTo(0, 0);
  return (
    <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">List Categories</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <NavLink
              type="button"
              className="gray_btn text-decoration-none"
              to="/admin/category/add"
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
                <th scope="col">Category</th>
                <th scope="col">View</th>
                <th scope="col">Setting</th>
              </tr>
            </thead>
            <tbody>
               {props.categories.map((category, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <h5>{category.name}</h5>
                  </td>
                  <td>
                  <NavLink
                    to={`/admin/category/product/${category._id}`}
                      type="button"
                      className="border-0 bg-light far fa-eye text-decoration-none"
                    ></NavLink>
                  </td>
                  <td>
                    <NavLink
                    to={`/admin/category/${category._id}`}
                      type="button"
                      className="border-0 bg-light fas fa-pencil-alt text-decoration-none"
                    ></NavLink>
                    <button
                      onClick={() => onHandleRemove(category._id)}
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

export default ListCategory;
