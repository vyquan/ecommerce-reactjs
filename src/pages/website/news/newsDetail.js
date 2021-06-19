import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import NewAPI from "../../../api/newAPI";
import Layout from "../../../core/layout";
import { API } from "../../../config";

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      try {
        const { data } = await NewAPI.get(id);
        console.log(data);
        setNews(data);
      } catch (error) {}
    };
    getNews();
  }, []);
  return (
    <div>
      <section className="blog_area single-post-area py-80px section-margin--small">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <div className="single-post row">
                <div className="col-lg-12">
                  <div className="feature-img">
                    <img
                      className="img-fluid"
                      src={`${API}/news/photo/${news._id}`}
                      alt
                    />
                    <br />
                  </div>
                </div>
                <div className="col-lg-12">
                  <h2>{news.title}</h2>
                  <br />
                  <br />
                  <span>By </span>
                  {news.author}
                  <span> - </span>
                  {news.createdAt}
                  <br />
                  <br />
                  <p>{news.content}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Search..."
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                        <i className="lnr lnr-magnifier" />
                      </button>
                    </span>
                  </div>

                  <div className="br" />
                </aside>
                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title">News Post</h3>
                  <div className="media post_item">
                    <img
                      src="https://imgproxy3.cdnforo.com/Gyf3rwNN_Fz5h7C4iawMcMnXvnZN6bW7-PW4M3HccjQ/h:216/plain/http://data.tinhte.vn/data/attachment-files/2021/06/5500823_cover_macOS-Monterey-wallpaper.jpg"
                      alt="post"
                    />
                    <div className="media-body">
                      <a>
                        <h3>Space The Final Frontier</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img
                      src="https://imgproxy3.cdnforo.com/_T4i9ln22FaLufx_5LDtKlndbtGn3AW-laGJdb9gVVM/h:216/plain/http://data.tinhte.vn/data/attachment-files/2021/06/5503458_cover_Android_12_Beta_2_tinhte.jpg"
                      alt="post"
                    />
                    <div className="media-body">
                      <a>
                        <h3>The Amazing Hubble</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img
                      src="https://imgproxy3.cdnforo.com/fOffKtnHGuEqUC9mJS1YKM4Ercum0vlnr9NiT_Bm71c/h:216/plain/http://data.tinhte.vn/data/attachment-files/2021/06/5498428_lossless-audio-lead-1622589505.jpg"
                      alt="post"
                    />
                    <div className="media-body">
                      <a>
                        <h3>Astronomy Or Astrology</h3>
                      </a>
                      <p>03 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img
                      src="https://imgproxy3.cdnforo.com/Gyf3rwNN_Fz5h7C4iawMcMnXvnZN6bW7-PW4M3HccjQ/h:216/plain/http://data.tinhte.vn/data/attachment-files/2021/06/5500823_cover_macOS-Monterey-wallpaper.jpg"
                      alt="post"
                    />
                    <div className="media-body">
                      <a>
                        <h3>Space The Final Frontier</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img
                      src="https://imgproxy3.cdnforo.com/_T4i9ln22FaLufx_5LDtKlndbtGn3AW-laGJdb9gVVM/h:216/plain/http://data.tinhte.vn/data/attachment-files/2021/06/5503458_cover_Android_12_Beta_2_tinhte.jpg"
                      alt="post"
                    />
                    <div className="media-body">
                      <a>
                        <h3>The Amazing Hubble</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="br" />
                </aside>

                <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title">Category</h4>
                  <ul className="list cat-list">
                    <li>
                      <a className="d-flex justify-content-between">
                        <p>Technology</p>
                        <p>37</p>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between">
                        <p>Lifestyle</p>
                        <p>24</p>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between">
                        <p>Fashion</p>
                        <p>59</p>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between">
                        <p>Art</p>
                        <p>29</p>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between">
                        <p>Food</p>
                        <p>15</p>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between">
                        <p>Architecture</p>
                        <p>09</p>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between">
                        <p>Adventure</p>
                        <p>44</p>
                      </a>
                    </li>
                  </ul>
                  <div className="br" />
                </aside>
                <aside className="single-sidebar-widget tag_cloud_widget">
                  <h4 className="widget_title">Tag</h4>
                  <ul className="list">
                    <li>
                      <a>Technology</a>
                    </li>
                    <li>
                      <a>Ipad</a>
                    </li>
                    <li>
                      <a>Iphone</a>
                    </li>
                    <li>
                      <a>Airtag</a>
                    </li>
                    <li>
                      <a>Mac</a>
                    </li>
                    <li>
                      <a>Technology</a>
                    </li>
                    <li>
                      <a>Lifestyle</a>
                    </li>
                    <li>
                      <a>Art</a>
                    </li>
                    <li>
                      <a>Adventure</a>
                    </li>
                    <li>
                      <a>ipad</a>
                    </li>
                    <li>
                      <a>imac</a>
                    </li>
                    <li>
                      <a>macbook</a>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================Blog Area =================*/}
    </div>
  );
};

export default NewsDetail;
