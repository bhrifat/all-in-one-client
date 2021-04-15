import React from "react";
import Events from "../TotalEvents/TotalEvents";
import Navbar from "./../NavBar/NavBar";

const Home = () => {
  return (
    <div>
      {/* <div className="custom-header">
        <Navbar></Navbar>
        <div className="container">
          <div className="m-5 header"> */}
      <h3 className="text-center">I grow by helping people in need</h3>
      {/* <div className="d-flex justify-content-center">
              <input
                className="form-control"
                type="text"
                placeholder="Search..."
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container"></div> */}
      <Events></Events>
    </div>
  );
};

export default Home;
