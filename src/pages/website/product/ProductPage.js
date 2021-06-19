import React, { useState, useEffect } from "react";
import { API } from "../../../config";
import { Link } from "react-router-dom";
import SidebarWebsite from "../../../components/website/sidebar";
import Pagination from "../../../core/Pagination";
import ProductAPI from "../../../api/productAPI";
import Posts from '../../../components/website/Post';
import Search from "../../../components/website/search"
const ProductPage = (props) => {
  window.scrollTo(0, 0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await ProductAPI.getAll();
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div>
      <section className="section-margin--small mb-5">
        <div className="container">
          <div className="row">
            <SidebarWebsite {...props} />
            <div className="col-xl-9 col-lg-8 col-md-7">
              {/* Start Filter Bar */}
              <div className="filter-bar d-flex flex-wrap align-items-center">
                <div className="sorting">
                  <select>
                    <option value={1}>Sort by: Featured</option>
                    <option value={1}>Price: Low to High</option>
                    <option value={1}>Price: High to Low</option>
                  </select>
                </div>
                {/* <div className="sorting mr-auto">
                  <select className="">
                    <option value={1}>Show 6</option>
                    <option value={1}>Show 12</option>
                    <option value={1}>Show 18</option>
                  </select>
                </div> */}
                <div>
                  <Search/>
                </div>
              </div>
              {/* End Filter Bar */}
              {/* Start Best Seller */}
              <section className="lattest-product-area pb-40 category-list">
                {/* <div className="row"> */}
                <Posts posts={currentPosts} loading={loading} />
                  {/* {props.products.map((item, index) => (
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
                  ))} */}
                {/* </div> */}
              </section>
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
              />
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
                  <a>
                    <img src="img/product/product-sm-1.png" alt />
                  </a>
                  <div className="desc">
                    <a className="title text-decoration-none">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a>
                    <img src="img/product/product-sm-2.png" alt />
                  </a>
                  <div className="desc">
                    <a className="title text-decoration-none">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a>
                    <img src="img/product/product-sm-3.png" alt />
                  </a>
                  <div className="desc">
                    <a className="title text-decoration-none">
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
                  <a>
                    <img src="img/product/product-sm-4.png" alt />
                  </a>
                  <div className="desc">
                    <a className="title text-decoration-none">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a>
                    <img src="img/product/product-sm-5.png" alt />
                  </a>
                  <div className="desc">
                    <a className="title text-decoration-none">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a>
                    <img src="img/product/product-sm-6.png" alt />
                  </a>
                  <div className="desc">
                    <a className="title text-decoration-none">
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
                  <a>
                    <img src="img/product/product-sm-7.png" alt />
                  </a>
                  <div className="desc">
                    <a className="title text-decoration-none">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a>
                    <img src="img/product/product-sm-8.png" alt />
                  </a>
                  <div className="desc">
                    <a className="title text-decoration-none">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a>
                    <img src="img/product/product-sm-9.png" alt />
                  </a>
                  <div className="desc">
                    <a className="title text-decoration-none">
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
                  <a>
                    <img src="img/product/product-sm-1.png" alt />
                  </a>
                  <div className="desc">
                    <a className="title text-decoration-none">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a>
                    <img src="img/product/product-sm-2.png" alt />
                  </a>
                  <div className="desc">
                    <a className="title text-decoration-none">
                      Gray Coffee Cup
                    </a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a>
                    <img src="img/product/product-sm-3.png" alt />
                  </a>
                  <div className="desc">
                    <a className="title text-decoration-none">
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

export default ProductPage;
