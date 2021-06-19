import React from "react";
import { API } from "../../../config";
import { NavLink } from "react-router-dom";

const ListNews = (props) => {
    const onHandleRemove = (id) => {
        props.onDeleteNews(id);
      };
  return (
    <div className="col-sm-10 pt-60px pd-60px">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {props.news.map((item, index) => (
          <div className="col">
            <div className="card shadow-sm">
              <img
                className="bd-placeholder-img card-img-top"
                width="90%"
                height={225}
                src={`${API}/news/photo/${item._id}`}
              />
              <div className="card-body">
                <p className="card-text">{item.title}</p>
                <p>
                  <span>By</span>: {item.author}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => onHandleRemove(item._id)}
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Xoá
                    </button>
                  </div>
                  <small className="text-muted">{item.createdAt}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListNews;
