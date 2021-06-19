import React from "react";

const DashboardPage = (props) => {
  return (
    <>
      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 pt-60px">
        <div className="analytics-sparkle-line reso-mg-b-30">
          <div className="analytics-content">
            <h5>Quantity Product</h5>
            <h3>
              <span className="counter">{props.products.length}</span>{" "}
              <span className="tuition-fees">Item</span>
            </h3>
            <span className="text-success">20%</span>
            <div className="progress m-b-0">
              <div
                className="progress-bar progress-bar-success"
                role="progressbar"
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "20%" }}
              >
                {" "}
                <span className="sr-only">20% Complete</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 pt-60px">
        <div className="analytics-sparkle-line reso-mg-b-30">
          <div className="analytics-content">
            <h5>Quantity Category</h5>
            <h3>
              <span className="counter">{props.categories.length}</span>{" "}
              <span className="tuition-fees">Item</span>
            </h3>
            <span className="text-danger">30%</span>
            <div className="progress m-b-0">
              <div
                className="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "30%" }}
              >
                {" "}
                <span className="sr-only">230% Complete</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 pt-60px">
        <div className="analytics-sparkle-line reso-mg-b-30 table-mg-t-pro dk-res-t-pro-30">
          <div className="analytics-content">
            <h5>Quantity User</h5>
            <h3>
              <span className="counter">{props.users.length}</span>{" "}
              <span className="tuition-fees">Item</span>
            </h3>
            <span className="text-info">60%</span>
            <div className="progress m-b-0">
              <div
                className="progress-bar progress-bar-info"
                role="progressbar"
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "60%" }}
              >
                {" "}
                <span className="sr-only">20% Complete</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 pt-60px">
        <div className="analytics-sparkle-line reso-mg-b-30">
          <div className="analytics-content">
            <h5>Quantity News</h5>
            <h3>
              <span className="counter">{props.news.length}</span>{" "}
              <span className="tuition-fees">Item</span>
            </h3>
            <span className="text-success">20%</span>
            <div className="progress m-b-0">
              <div
                className="progress-bar progress-bar-success"
                role="progressbar"
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "20%" }}
              >
                {" "}
                <span className="sr-only">20% Complete</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 pt-60px">
        <div className="analytics-sparkle-line reso-mg-b-30">
          <div className="analytics-content">
            <h5>Quantity Order</h5>
            <h3>
              <span className="counter">3000</span>{" "}
              <span className="tuition-fees">Item</span>
            </h3>
            <span className="text-danger">30%</span>
            <div className="progress m-b-0">
              <div
                className="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "30%" }}
              >
                {" "}
                <span className="sr-only">230% Complete</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      </>    
  );
};

export default DashboardPage;
