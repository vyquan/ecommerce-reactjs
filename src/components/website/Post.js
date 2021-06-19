import React from "react";
import { API } from "../../config";
import { Link } from "react-router-dom";
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="row">
      {posts.map((item, index) => (
        <div className="col-md-6 col-lg-4">
          <div className="card text-center card-product border-0">
            <div className="card-product__img">
              <img
                className="card-img"
                src={`${API}/product/photo/${item._id}`}
                alt
              />
              <ul className="card-product__imgOverlay">
                <li>
                  <button>
                    <i className="ti-search" />
                  </button>
                </li>
                <li>
                  <button>
                    <i className="ti-shopping-cart" />
                  </button>
                </li>
                <li>
                  <button>
                    <i className="ti-heart" />
                  </button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <p>Accessories</p>
              <h4 className="card-product__title">
                <Link
                  to={`/product/${item._id}`}
                  className="text-decoration-none fs-5 text"
                >
                  {item.name}
                </Link>
              </h4>
              <p className="card-product__price">
                $ {new Intl.NumberFormat().format(item.price)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
