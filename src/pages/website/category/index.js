import React from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../config";
import { Link } from "react-router-dom";
import SidebarWebsite from "../../../components/website/sidebar"

const CategoryPage = (props) => {
  const { id } = useParams();
  window.scrollTo(0, 0);
  const result = props.products
    .filter((product) => product.category == id)
    .map((product) => {
      return (
        <div className="col-md-6 col-lg-4">
          <div className="card text-center card-product border-0">
            <div className="card-product__img">
              <img
                className="card-img"
                src={`${API}/product/photo/${product._id}`}
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
                  to={`/product/${product._id}`}
                  className="text-decoration-none fs-5 text"
                >
                  {product.name}
                </Link>
              </h4>
              <p className="card-product__price">
              $ {new Intl.NumberFormat().format(product.price)}
              </p>
            </div>
          </div>
        </div>
      );
    });
  return (
    <div>
      <section className="section-margin--small mb-5">
        <div className="container">
          <div className="row">
          <SidebarWebsite {...props}/>
            <div className="col-xl-9 col-lg-8 col-md-7">
              {/* Start Filter Bar */}
              <div className="filter-bar d-flex flex-wrap align-items-center">
                {/* <div className="sorting">
                  <select>
                    <option value={1}>Default sorting</option>
                    <option value={1}>Default sorting</option>
                    <option value={1}>Default sorting</option>
                  </select>
                </div>
                <div className="sorting mr-auto">
                  <select>
                    <option value={1}>Show 12</option>
                    <option value={1}>Show 12</option>
                    <option value={1}>Show 12</option>
                  </select>
                </div> */}
                <div>
                  <div className="input-group filter-bar-search">
                    <input type="text" placeholder="Search" />
                    <div className="input-group-append">
                      <button type="button">
                        <i className="ti-search" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Filter Bar */}
              {/* Start Best Seller */}
              <section className="lattest-product-area pb-40 category-list">
                <div className="row">
                  {result}
                </div>
              </section>
              {/* End Best Seller */}
            </div>
          </div>
        </div>
      </section>
      {/* <section className="related-product-area">
        <div className="container">
          <div className="section-intro pb-60px">
            <p>Popular Item in the market</p>
            <h2>
              Top <span className="section-intro__style">Product</span>
            </h2>
          </div>
          <div className="row mt-30">
            <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
              <div className="single-search-product-wrapper">
                <div className="single-search-product d-flex">
                  <a href="#">
                    <img src="img/product/product-sm-1.png" alt />
                  </a>
                  <div className="desc">
                    <a href="#" className="title">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a href="#">
                    <img src="img/product/product-sm-2.png" alt />
                  </a>
                  <div className="desc">
                    <a href="#" className="title">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a href="#">
                    <img src="img/product/product-sm-3.png" alt />
                  </a>
                  <div className="desc">
                    <a href="#" className="title">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
              <div className="single-search-product-wrapper">
                <div className="single-search-product d-flex">
                  <a href="#">
                    <img src="img/product/product-sm-4.png" alt />
                  </a>
                  <div className="desc">
                    <a href="#" className="title">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a href="#">
                    <img src="img/product/product-sm-5.png" alt />
                  </a>
                  <div className="desc">
                    <a href="#" className="title">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a href="#">
                    <img src="img/product/product-sm-6.png" alt />
                  </a>
                  <div className="desc">
                    <a href="#" className="title">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
              <div className="single-search-product-wrapper">
                <div className="single-search-product d-flex">
                  <a href="#">
                    <img src="img/product/product-sm-7.png" alt />
                  </a>
                  <div className="desc">
                    <a href="#" className="title">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a href="#">
                    <img src="img/product/product-sm-8.png" alt />
                  </a>
                  <div className="desc">
                    <a href="#" className="title">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a href="#">
                    <img src="img/product/product-sm-9.png" alt />
                  </a>
                  <div className="desc">
                    <a href="#" className="title">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
              <div className="single-search-product-wrapper">
                <div className="single-search-product d-flex">
                  <a href="#">
                    <img src="img/product/product-sm-1.png" alt />
                  </a>
                  <div className="desc">
                    <a href="#" className="title">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a href="#">
                    <img src="img/product/product-sm-2.png" alt />
                  </a>
                  <div className="desc">
                    <a href="#" className="title">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a href="#">
                    <img src="img/product/product-sm-3.png" alt />
                  </a>
                  <div className="desc">
                    <a href="#" className="title">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="subscribe-position">
        <div className="container">
          <div className="subscribe text-center">
            <h3 className="subscribe__title">Get Update From Anywhere</h3>
            <p>
              Bearing Void gathering light light his eavening unto dont afraid
            </p>
            <div id="mc_embed_signup">
              <form
                target="_blank"
                action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                method="get"
                className="subscribe-form form-inline mt-5 pt-1"
              >
                <div className="form-group ml-sm-auto">
                  <input
                    className="form-control mb-1"
                    type="email"
                    name="EMAIL"
                    placeholder="Enter your email"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Your Email Address '"
                  />
                  <div className="info" />
                </div>
                <button
                  className="button button-subscribe mr-auto mb-1"
                  type="submit"
                >
                  Subscribe Now
                </button>
                <div style={{ position: "absolute", left: "-5000px" }}>
                  <input
                    name="b_36c4fd991d266f23781ded980_aefe40901a"
                    tabIndex={-1}
                    defaultValue
                    type="text"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
