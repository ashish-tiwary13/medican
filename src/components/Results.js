import React from "react";

const Results = () => {
  return (
    <>
      <div className="container d-flex justify-content-left my-3 fs-4">
        Result
      </div>
      <div className="container d-flex justify-content-center my-3">
        <div className="col">
          <div className="cart">
            <div className="cart-body">
              <div className="image">
                <img src="https://picsum.photos/200/300" alt="image" />
              </div>
            </div>
            <div className="cart-body">
              <h5 className="cart-title">Card title</h5>
              <h5 className="cart-title">Card title</h5>
              <h5 className="cart-title">Card title</h5>
              <h5 className="cart-title">Card title</h5>
            </div>
            <div className="cart-body">
              <h5 className="cart-title">Card title</h5>
              <h5 className="cart-title">Card title</h5>
              <h5 className="cart-title">Card title</h5>
              <h5 className="cart-title">Card title</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
