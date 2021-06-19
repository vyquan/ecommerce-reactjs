import React from "react";
import { API } from "../../../config";

const ListOrder = (props) => {
    // console.log(props.order);
  window.scrollTo(0, 0);
  return (
    <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">List Order</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">            
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
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Time</th>
                <th scope="col">Address</th>
              </tr>
            </thead>
            <tbody>
              {props.order.map((item, index)  => (
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
                    <h5>$ {new Intl.NumberFormat().format(item.totalmoney)}</h5>
                  </td>
                  <td>
                    <h5>{item.phone}</h5>
                  </td>
                  <td>
                    <h5>{item.email}</h5>
                  </td>
                  <td>
                    <h5>{item.updatedAt}</h5>
                  </td>
                  <td>
                    <h5>{item.address}</h5>
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

export default ListOrder;
