import React from "react";
import { Link } from "react-router-dom";
import { API } from "../../../config";
import addToCart from "../../../cart";
const HomePage = (props) => {
  window.scrollTo(0, 0);
  const addCart = (id) =>{
    addToCart.render(id)
  }
  return (
    <main className="site-main">
      
      <section className="hero-banner">
        <div className="container">
          <div className="row no-gutters align-items-center pt-60px pb-60px">
            <div className="col-5 d-none d-sm-block">
              <div className="hero-banner__img">
                <img
                  className="img-fluid"
                  src="img/banner/acmi__cko5onr8ar42_large.png"
                />
              </div>
            </div>
            <div className="col-sm-7 col-lg-6 offset-lg-1 pl-4 pl-md-5 pl-lg-0">
              <div className="hero-banner__content">
                <h4>Shop is fun</h4>
                <h1>Get 3% Daily Cash back with Apple Card.</h1>
                <p>
                  And pay for your new Mac over 12 months, interest‑free when
                  you choose to check out with Apple Card Monthly Installments.
                </p>
                <a className="button button-hero text-decoration-none" to="#">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-margin mt-0">
        <div className="owl-carousel owl-theme hero-carousel">
          <div className="hero-carousel__slide">
            <img
              src="img/banner/apple_iphone-12_new-design_10132020_big.jpg.large.jpg"
              className="img-fluid"
            />
            <a
              to="#"
              className="hero-carousel__slideOverlay text-decoration-none"
            >
              <h3>iPhone 12</h3>
              <p>Blast past fast.</p>
            </a>
          </div>
          <div className="hero-carousel__slide">
            <img
              src="img/banner/imac-colorful-20210524033011.png"
              className="img-fluid"
            />
            <a
              to="#"
              className="hero-carousel__slideOverlay text-decoration-none"
            >
              <h3>iMac M1</h3>
              <p>Say hello. Seven vibrant colors.</p>
            </a>
          </div>
          <div className="hero-carousel__slide">
            <img src="img/banner/2021-06-07uy.png" className="img-fluid" />
            <a
              to="#"
              className="hero-carousel__slideOverlay text-decoration-none"
            >
              <h3>iPad Pro</h3>
              <p>Supercharged by the Apple M1 chip.</p>
            </a>
          </div>
          <div className="hero-carousel__slide">
            <img
              src="img/banner/iPhone-Watch-SE-jpeg-4025-160024.png"
              className="img-fluid"
            />
            <a
              to="#"
              className="hero-carousel__slideOverlay text-decoration-none"
            >
              <h3>Apple Watch Series 6</h3>
              <p>The future of heh is on your wrist.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="section-margin calc-60px">
        <div className="container">
          <div className="section-intro pb-60px">
            <p>Popular Item in the market</p>
            <h2>
              New <span className="section-intro__style">Iphone</span>
            </h2>
          </div>
          <div className="row">
            {props.products
              .filter((item) => item.category == "6064430cba0edc26d4e10fef")
              .map(
                (item, index) =>
                  index < 8 && (
                    <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                      <div className="card text-center card-product border-0">
                        <div className="card-product__img">
                          <img
                            className="card-img"
                            src={`${API}/product/photo/${item._id}`}
                          />
                          <ul className="card-product__imgOverlay">
                            <li>
                              <button>
                                <i className="ti-search" />
                              </button>
                            </li>
                            <li>
                              <button onClick={()=>{addCart(item._id)}}
                                className="addCart"
                                data-id={`${item._id}`}
                              >
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
                  )
              )}
          </div>
        </div>
      </section>

      <section
        className="offer"
        id="parallax-1"
        data-anchor-target="#parallax-1"
        data-300-top="background-position: 20px 30px"
        data-top-bottom="background-position: 0 20px"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="offer__content text-center">
                <h3>Up To 50% Off</h3>
                <h4 className="text-corlor">Winter Sale</h4>
                <p>Him she'd let them sixth saw light</p>
                <a className="button button--active mt-3 mt-xl-4" to="#">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-margin calc-60px">
        <div className="container">
          <div className="section-intro pb-60px">
            <p>Popular Item in the market</p>
            <h2>
              Imac <span className="section-intro__style">M1</span>
            </h2>
          </div>
          <div className="row">
            {props.products
              .filter((item) => item.category == "60bd0013a39eb051f8c58403")
              .map(
                (item, index) =>
                  index < 7 && (
                    <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                      <div className="card text-center card-product border-0">
                        <div className="card-product__img">
                          <img
                            className="card-img"
                            src={`${API}/product/photo/${item._id}`}
                          />
                          <ul className="card-product__imgOverlay">
                            <li>
                              <button>
                                <i className="ti-search" />
                              </button>
                            </li>
                            <li>
                              <button
                                className="addCart"
                                data-id={`${item._id}`}
                              >
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
                  )
              )}
          </div>
        </div>
      </section>
      <section className="section-margin calc-60px">
        <div className="container">
          <div className="section-intro pb-60px">
            <p>Popular Item in the market</p>
            <h2>
              New <span className="section-intro__style">Accessories</span>
            </h2>
          </div>
          <div className="row">
            {props.products
              .filter((item) => item.category == "60c80c75b2e0cf5988a9ab99")
              .map(
                (item, index) =>
                  index < 8 && (
                    <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                      <div className="card text-center card-product border-0">
                        <div className="card-product__img">
                          <img
                            className="card-img"
                            src={`${API}/product/photo/${item._id}`}
                          />
                          <ul className="card-product__imgOverlay">
                            <li>
                              <button>
                                <i className="ti-search" />
                              </button>
                            </li>
                            <li>
                              <button
                                className="addCart"
                                data-id={`${item._id}`}
                              >
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
                  )
              )}
          </div>
        </div>
      </section>
      <section className="blog">
        <div className="container">
          <div className="section-intro pb-60px">
            <p>Popular Item in the market</p>
            <h2>
              Latest <span className="section-intro__style">News</span>
            </h2>
          </div>
          <div className="row">
            {props.news.map(
              (item, index) =>
                index < 3 && (
                  <div className="col-md-6 col-lg-4 mb-4 mb-lg-0" key={index}>
                    <div className="card card-blog border-0">
                      <div className="card-blog__img">
                        <img
                          className="card-img rounded-0"
                          src={`${API}/news/photo/${item._id}`}
                        />
                      </div>
                      <div className="card-body">
                        <ul className="card-blog__info">
                          <li>
                            <a>
                              <i className="far fa-user"></i> By Admin
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="ti-comments-smiley" /> 2 Comments
                            </a>
                          </li>
                        </ul>
                        <h4 className="card-blog__title">{item.title}</h4>
                        <p>
                          Let one fifth i bring fly to divided face for bearing
                          divide unto seed. Winged divided light Forth.
                        </p>
                        <a className="card-blog__link">
                          Read More <i className="ti-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </section>

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
                    // onfocus="this.placeholder = 'Your Email Address '"
                    // onblur="this.placeholder = 'Your Email Address '"
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
    </main>
  );
};

export default HomePage;
