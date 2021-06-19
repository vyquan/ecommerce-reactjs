import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { API } from "../../../config";
import { NavLink } from "react-router-dom";
const CartPage = ({onOrder}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let history = useHistory();
  const onHandleSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("address", data.address);
    formData.append("phone", data.phone);
    formData.append("productId", data.productId);
    formData.append("totalmoney", data.totalmoney);
    onOrder(formData);
    
    // history.push("/admin/products");
  };
  window.scrollTo(0, 0);
  let cart = localStorage.getItem("cart");
  cart = cart == null ? [] : JSON.parse(cart);
  let totalMoneny = 0;
  let tableConten = ``;
  if (cart.length > 0) {
    return (
      <section className="cart_area">
        <div className="container">
          <div className="cart_inner">
            <div className="table-responsive">
            <form class="form-order"  onSubmit={handleSubmit(onHandleSubmit)}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart
                    ? cart.map((item, index) => {
                        totalMoneny += item.quantity * item.price;
                        return (
                          <tr>
                            <input hidden id="productId"  value={item._id} {...register("productId", { required: true })}/>
                            <td>
                              <div className="media">
                                <div className="d-flex">
                                  <img style={{width: 55}} src={`${API}/product/photo/${item._id}`}/>
                                  <input hidden id="order_image" defaultValue={`${API}/product/photo/${item._id}`}/>
                                </div>
                                <div className="media-body">
                                  <h5>{item.name}</h5>
                                  <input hidden id="order_name" value={item.name}/>
                                </div>
                              </div>
                            </td>
                            <td>
                              <h5>$ {item.price}</h5>
                            </td>
                            <td>
                              <div className="product_count">
                                <input
                                  type="text"
                                  name="qty"
                                  id="sst"
                                  value={item.quantity}
                                  maxLength={12}
                                  defaultValue={1}
                                  title="Quantity:"
                                  className="input-text qty"
                                />
                                <input hidden id="order_quantity" value={item.quantity}/>
                              </div>
                            </td>
                            <td>
                              <h5>$ {item.price * item.quantity}</h5>
                              <input hidden id="order_price" value={item.price * item.quantity} />
                            </td>
                          </tr>
                        );
                      })
                    : ""}
                  {
                
                      <tr>
                         <td>
                          <h5>Total moneny</h5>
                        </td>
                        <td></td>
                        <td></td>
                       
                        <td>
                          <h5>$ {totalMoneny}</h5>
                          <input hidden id="totalMoneny"  value={totalMoneny} {...register("totalmoney", { required: true })}/>
                        </td>
                      </tr>
                    
                  }
                  <tr className="shipping_area">
                    <td></td>
                    <td>
                      <div className="shipping_box">
                        <input type="text" id="name" placeholder="Name" {...register("name", { required: true })}/>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="shipping_box">
                        <input
                          type="number"
                          id="phone"
                          placeholder="Phone number"
                          {...register("phone", { required: true })}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="shipping_area">
                    <td></td>
                    <td>
                      <div className="shipping_box">
                        <input type="email" id="email" placeholder="Email" 
                        {...register("email", { required: true })}/>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="shipping_box">
                        <input type="text" id="address" placeholder="Address" 
                        {...register("address", { required: true })}/>
                      </div>
                    </td>
                  </tr>
                  <tr className="out_button_area">
                    <td className="d-none-l"></td>
                    <td className></td>
                    <td></td>
                    <td>
                      <div className="checkout_btn_inner d-flex align-items-center">
                        <a className="gray_btn">Shopping</a>
                        <button typr="submit" className="primary-btn ml-2">Proceed to checkout</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="blog-banner-area" id="category">
        <div className="container h-100">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              <img
                style={{ width: "300px" }}
                src="img/cart/Add to Cart-amico.png"
              />
            </div>
            <div className="col-3">
              <div className="blog-banner">
                <div className="text-center">
                  <h3>Your Apple Cart is empty</h3>
                  <nav aria-label="breadcrumb" className="banner-breadcrumb">
                    <ol className="breadcrumb">
                      <NavLink
                        to="/"
                        className="button button--active mt-3 text-decoration-none mt-xl-4"
                      >
                        Shop today's deals
                      </NavLink>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default CartPage;
