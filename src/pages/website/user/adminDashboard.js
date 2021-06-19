import React from "react";
import { isAuthenticated } from "../../../auth";
import Layout from "../../../core/layout";
const AdminDashboard = () => {
    const {user} = isAuthenticated()
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
                    src="img/blog/author.png"
                    alt
                  />
                  <h4>{user.name} - {user.role ==1 ? 'Admin' : 'Register User'}</h4>
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
                  <p>
                    Boot camps have its supporters andit sdetractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get. Boot camps have itssuppor
                    ters andits detractors.
                  </p>
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
                      <a href="blog-details.html">
                        <h3>Space The Final Frontier</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <div className="media-body">
                      <a href="blog-details.html">
                        <h3>The Amazing Hubble</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <div className="media-body">
                      <a href="blog-details.html">
                        <h3>Astronomy Or Astrology</h3>
                      </a>
                      <p>03 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <div className="media-body">
                      <a href="blog-details.html">
                        <h3>Asteroids telescope</h3>
                      </a>
                      <p>01 Hours ago</p>
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

export default AdminDashboard;
