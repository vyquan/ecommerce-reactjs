import React from "react";

const BlogBannerArea = () => {
  return (
    <section className="blog-banner-area" id="category">
      <div className="container h-100">
        <div className="blog-banner">
          <div className="text-center">
            <h1>Shop Category</h1>
            <nav aria-label="breadcrumb" className="banner-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a className=" text-decoration-none">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Shop Category
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBannerArea;
