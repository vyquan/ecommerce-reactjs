import React from "react";
import { Link } from "react-router-dom";
import { API } from "../../../config";
const NewsPage = (props) => {
  window.scrollTo(0, 0);
  return (
    <div>
      <section className="blog_categorie_area">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
              <div className="categories_post">
                <img
                  className="card-img rounded-0"
                  src="img/blog/cat-post/daniel-romero--cCxgKIA5RA-unsplash.jpg"
                  alt="post"
                />
                <div className="categories_details">
                  <div className="categories_text">
                    <a >
                      <h5>Ipad</h5>
                    </a>
                    <div className="border_line" />
                    <p>Enjoy your social life together</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
              <div className="categories_post">
                <img
                  className="card-img rounded-0"
                  src="img/blog/cat-post/colors_lifestyle_fallback__fat81.png"
                  alt="post"
                />
                <div className="categories_details">
                  <div className="categories_text">
                    <a >
                      <h5>Mac</h5>
                    </a>
                    <div className="border_line" />
                    <p>Be a part of life</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
              <div className="categories_post">
                <img
                  className="card-img rounded-0"
                  src="img/blog/cat-post/onur-binay-OKjJZNTl004-unsplash.jpg"
                  alt="post"
                />
                <div className="categories_details">
                  <div className="categories_text">
                    <a >
                      <h5>iPhone</h5>
                    </a>
                    <div className="border_line" />
                    <p>Flagship phone in the world</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog_left_sidebar">
                {props.news.map((item, index) => (
                  <article className="row blog_item" key={index}>
                    <div className="col-md-3">
                      <div className="blog_info text-right">
                        <div className="post_tag">
                          <a >Food,</a>
                          <a className="active" >
                            Technology,
                          </a>
                          <a >Politics,</a>
                          <a >Lifestyle</a>
                        </div>
                        <ul className="blog_meta list">
                          <li>
                            <a >
                              Mark wiens
                              <i className="lnr lnr-user" />
                            </a>
                          </li>
                          <li>
                            <a >
                              12 Dec, 2017
                              <i className="lnr lnr-calendar-full" />
                            </a>
                          </li>
                          <li>
                            <a >
                              1.2M Views
                              <i className="lnr lnr-eye" />
                            </a>
                          </li>
                          <li>
                            <a >
                              06 Comments
                              <i className="lnr lnr-bubble" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="blog_post">
                        <img src={`${API}/news/photo/${item._id}`} />
                        <div className="blog_details">
                          <Link
                            to={`/new/${item._id}`}
                            className="text-decoration-none fs-5 text"
                          >
                            <h2>{item.title}</h2>
                          </Link>
                          <p>
                            MCSE boot camps have its supporters and its
                            detractors. Some people do not understand why you
                            should have to spend money on boot camp when you can
                            get the MCSE study materials yourself at a fraction.
                          </p>
                          <Link
                            className="button button-blog text-decoration-none"
                            to={`/new/${item._id}`}
                          >
                            View More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
                <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    <li className="page-item">
                      <a  className="page-link" aria-label="Previous">
                        <span aria-hidden="true">
                          <span className="lnr lnr-chevron-left" />
                        </span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a  className="page-link">
                        01
                      </a>
                    </li>
                    <li className="page-item active">
                      <a  className="page-link">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a  className="page-link">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a  className="page-link">
                        04
                      </a>
                    </li>
                    <li className="page-item">
                      <a  className="page-link">
                        09
                      </a>
                    </li>
                    <li className="page-item">
                      <a  className="page-link" aria-label="Next">
                        <span aria-hidden="true">
                          <span className="lnr lnr-chevron-right" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title">Popular Posts</h3>
                  <div className="media post_item">
                    <img src="img/blog/popular-post/post1.jpg" alt="post" />
                    <div className="media-body">
                      <a >
                        <h3>Space The Final Frontier</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="img/blog/popular-post/post2.jpg" alt="post" />
                    <div className="media-body">
                      <a >
                        <h3>The Amazing Hubble</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="img/blog/popular-post/post3.jpg" alt="post" />
                    <div className="media-body">
                      <a >
                        <h3>Astronomy Or Astrology</h3>
                      </a>
                      <p>03 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="img/blog/popular-post/post4.jpg" alt="post" />
                    <div className="media-body">
                      <a >
                        <h3>Asteroids telescope</h3>
                      </a>
                      <p>01 Hours ago</p>
                    </div>
                  </div>
                  <div className="br" />
                </aside>
                <aside className="single_sidebar_widget ads_widget">
                  <a >
                    <img className="img-fluid" src="img/blog/add.jpg" alt />
                  </a>
                  <div className="br" />
                </aside>
                <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title">Post Catgories</h4>
                  <ul className="list cat-list">
                    <li>
                      <a  className="d-flex justify-content-between">
                        <p>Technology</p>
                        <p>37</p>
                      </a>
                    </li>
                    <li>
                      <a  className="d-flex justify-content-between">
                        <p>Lifestyle</p>
                        <p>24</p>
                      </a>
                    </li>
                    <li>
                      <a  className="d-flex justify-content-between">
                        <p>Fashion</p>
                        <p>59</p>
                      </a>
                    </li>
                    <li>
                      <a  className="d-flex justify-content-between">
                        <p>Art</p>
                        <p>29</p>
                      </a>
                    </li>
                    <li>
                      <a  className="d-flex justify-content-between">
                        <p>Food</p>
                        <p>15</p>
                      </a>
                    </li>
                    <li>
                      <a  className="d-flex justify-content-between">
                        <p>Architecture</p>
                        <p>09</p>
                      </a>
                    </li>
                    <li>
                      <a  className="d-flex justify-content-between">
                        <p>Adventure</p>
                        <p>44</p>
                      </a>
                    </li>
                  </ul>
                  <div className="br" />
                </aside>
                <aside className="single-sidebar-widget newsletter_widget">
                  <h4 className="widget_title">Newsletter</h4>
                  <p>
                    Here, I focus on a range of items and features that we use
                    in life without giving them a second thought.
                  </p>
                  <div className="form-group d-flex flex-row">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fa fa-envelope" aria-hidden="true" />
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroup"
                        placeholder="Enter email address"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email'"
                      />
                    </div>
                    <a  className="bbtns">
                      Subcribe
                    </a>
                  </div>
                  <p className="text-bottom">You can unsubscribe at any time</p>
                  <div className="br" />
                </aside>
                <aside className="single-sidebar-widget tag_cloud_widget">
                  <h4 className="widget_title">Tag Clouds</h4>
                  <ul className="list">
                    <li>
                      <a >Technology</a>
                    </li>
                    <li>
                      <a >Fashion</a>
                    </li>
                    <li>
                      <a >Architecture</a>
                    </li>
                    <li>
                      <a >Fashion</a>
                    </li>
                    <li>
                      <a >Food</a>
                    </li>
                    <li>
                      <a >Technology</a>
                    </li>
                    <li>
                      <a >Lifestyle</a>
                    </li>
                    <li>
                      <a >Art</a>
                    </li>
                    <li>
                      <a >Adventure</a>
                    </li>
                    <li>
                      <a >Food</a>
                    </li>
                    <li>
                      <a >Lifestyle</a>
                    </li>
                    <li>
                      <a >Adventure</a>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="instagram_area">
        <div className="container box_1620">
          <div className="insta_btn">
            <a className="btn theme_btn" >
              Follow us on instagram
            </a>
          </div>
          <div className="instagram_image row m0">
            <a >
              <img src="img/instagram/ins-1.jpg" alt />
            </a>
            <a >
              <img src="img/instagram/ins-2.jpg" alt />
            </a>
            <a >
              <img src="img/instagram/ins-3.jpg" alt />
            </a>
            <a >
              <img src="img/instagram/ins-4.jpg" alt />
            </a>
            <a >
              <img src="img/instagram/ins-5.jpg" alt />
            </a>
            <a >
              <img src="img/instagram/ins-6.jpg" alt />
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default NewsPage;
