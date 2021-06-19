import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import ProductAPI from "../../../api/productAPI";
import { API } from "../../../config";

const EditProduct = (props) => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await ProductAPI.get(id);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let history = useHistory();
  const onHandleSubmit = async (data) => {
    const img = document.querySelector("#product-image").files[0];
    if(img){
      formData.append('photo',img)
    }
    const formData = new FormData();
    formData.append("name",document.querySelector("#name").value);
    // formData.append("photo", img, data.photo);
    formData.append("price", document.querySelector("#price").value);
    formData.append("category", document.querySelector("#category").value);
    formData.append("description", document.querySelector("#description").value);
    formData.append("quantity", document.querySelector("#quantity").value);
    props.onEditProduct(id, formData);
    history.push("/admin/products");
  };
  return (
    <main className="col-md-10 col-lg-10">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
        <h1 className="h2">Edit Product</h1>
      </div>
      <form
        action=""
        className="form-contact contact_form"
        method="post"
        id="contactForm"
        noValidate="novalidate"
        onSubmit={handleSubmit(onHandleSubmit)}
      >
        <div className="row">
          <div className="col-lg-5">
            <div className="form-group">
              <label htmlFor="">Nane product</label>
              <input
                className={`${
                  errors.name ? "border-danger" : ""
                }  rounded-pill form-control `}
                name="name"
                id="name"
                type="text"
                placeholder="Nane product..."
                defaultValue={products.name}
                
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Image</label>
              <input
                className={`${
                  errors.photo ? "border-danger" : ""
                }  rounded-pill form-control `}
                name="email"
                id="product-image"
                type="file"
                defaultValue={products.photo}
                
              />
              <img
                className="imgProduct"
                src={`${API}/product/photo/${products._id}`}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Price</label>
              <input
                className={`${
                  errors.price ? "border-danger" : ""
                }  rounded-pill form-control `}
                name="price"
                id="price"
                type="number"
                placeholder="Price"
                defaultValue={products.price}
                
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select 
              id="category"
                className={`${
                  errors.category ? "border-danger" : ""
                }  rounded-pill form-control `}
                defaultValue={products.category}
                
              >
                {props.categories.map((item) => (
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
                }  rounded-pill form-control `}
                name="quantity"
                id="quantity"
                type="number"
                placeholder="Quantity"
                defaultValue={products.quantity}
                
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Description</label>
              <textarea
                className={`${
                  errors.description ? "border-danger" : ""
                }  form-control different-control w-100 rounded`}
                name="description"
                id="description"
                cols={30}
                rows={5}
                placeholder="Description"
                defaultValue={products.description}               
              />
            </div>
          </div>
        </div>
        <div className="form-group text-center text-md-right mt-3">
          <button
            type="submit"
            className="button button-hero text-decoration-none"
          >
            Edit
          </button>
        </div>
      </form>
    </main>
  );
};

export default EditProduct;
