import React from "react";
import { isAuthenticated } from "../../../auth";
import Layout from "../../../core/layout";
import { Link } from "react-router-dom";
const UserDashboard = () => {
  const { user } = isAuthenticated();
  window.scrollTo(0, 0);
  return (
    <Layout title="Dashboard" description="User Dashboard">
      <section className="blog_area single-post-area py-80px section-margin--small">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget author_widget">
                  <div className="br" />
                  <img
                    className="author_img rounded-circle"
                    src="https://lh6.googleusercontent.com/a-/AOh14GjsqaoGbhOr_k1gOdrCQj2MyABDX5ElJ5OWfZNW9g=s96-c-rg-br100"
                    alt
                  />
                  <h4>
                    {user.name} - {user.role == 1 ? "Admin" : "Register User"}
                  </h4>
                  <p>{user.email}</p>
                  <div className="social_icon">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-github" />
                    </a>
                    <a href="#">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                  {/* <p>
                    Boot camps have its supporters andit sdetractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get. Boot camps have itssuppor
                    ters andits detractors.
                  </p> */}
                  <div className="br" />
                </aside>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget popular_post_widget">
                  <div className="br" />
                  <div className="media post_item">
                    <div className="media-body">
                      <Link className="text-decoration-none">
                        <h6>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            height="1.2em"
                            width="1.2em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                          </svg>{" "}
                          Account Information
                        </h6>
                      </Link>
                    </div>
                  </div>
                  <div className="media post_item">
                    <div className="media-body">
                      <Link className="text-decoration-none">
                        <h6>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
                          </svg>{" "}
                          My message (20)
                        </h6>
                      </Link>
                    </div>
                  </div>
                  <div className="media post_item">
                    <div className="media-body">
                      <Link className="text-decoration-none">
                        <h6>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4h6c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path>
                          </svg>{" "}
                          My order
                        </h6>
                      </Link>
                    </div>
                  </div>
                  <div className="media post_item">
                    <div className="media-body">
                      <Link className="text-decoration-none">
                        <h6>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                          </svg>{" "}
                          Delivery address
                        </h6>
                      </Link>
                    </div>
                  </div>
                  <div className="media post_item">
                    <div className="media-body">
                      <Link className="text-decoration-none">
                        <h6>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M20 4h6c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14h6v-6h16v6zm0-10h6V6h16v2z"></path>
                          </svg>{" "}
                          Billing Information
                        </h6>
                      </Link>
                    </div>
                  </div>
                  <div className="br" />
                </aside>
                <aside className="single_sidebar_widget ads_widget">
                  <a href="#">
                    <img className="img-fluid" src="img/blog/add.jpg" alt />
                  </a>
                  <div className="br" />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UserDashboard;
