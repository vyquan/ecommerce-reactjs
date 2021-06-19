import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const ProductAdd = ({ onAddProduct , categories}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let history = useHistory();
  const onHandleSubmit = (data) => {
    const formData = new FormData();
    const img = document.querySelector("#product-image").files[0];
    formData.append("name", data.name);
    formData.append("photo", img, data.photo);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("quantity", data.quantity);
    onAddProduct(formData);
    history.push("/admin/products");
  };
  return (
    <main className="col-md-10 col-lg-10">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
        <h1 className="h2">Add Product</h1>
      </div>
      <form
        className="form-contact contact_form"
        method="post"
        id="contactForm"
        noValidate="novalidate"
        onSubmit={handleSubmit(onHandleSubmit)}
      >
        <div className="row">
          <div className="col-lg-5">
            <div className="form-group">
              <label htmlFor="">Name product</label>
              <input
                className={`${
                  errors.name ? "border-danger" : ""
                } form-control rounded-pill`}
                name="name"
                id="name"
                type="text"
                placeholder="Name product..."
                {...register("name", { required: true })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Image</label>
              <input
                className={`${
                  errors.photo ? "border-danger" : ""
                } form-control rounded-pill`}
                name="email"
                id="product-image"
                type="file"
                {...register("photo", { required: true })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Price</label>
              <input
                className={`${
                  errors.price ? "border-danger" : ""
                } form-control rounded-pill`}
                name="email"
                id="email"
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select
                className={`${
                  errors.category ? "border-danger" : ""
                } form-control rounded-pill`}
                {...register("category")}
              >
                {categories.map((item) => (
                  <option value={item._id}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="form-group">
              <label htmlFor="">Quantity</label>
              <input
                className={`${
                  errors.quantity ? "border-danger" : ""
                } form-control rounded-pill`}
                name="subject"
                id="subject"
                type="number"
                placeholder="Quantity"
                {...register("quantity")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Description</label>
              <textarea
                className={`${
                  errors.description ? "border-danger" : ""
                } form-control different-control w-100 rounded`}
                name="message"
                id="message"
                cols={30}
                rows={5}
                placeholder="Text..."
                {...register("description")}
              />
            </div>
          </div>
        </div>
        <div className="form-group text-center text-md-right mt-3">
          <button
            className="button button-hero text-decoration-none"
          >
            Create
          </button>
        </div>
      </form>
    </main>
  );
};

export default ProductAdd;
