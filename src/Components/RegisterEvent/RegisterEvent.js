import React, { useEffect } from "react";

const RegisterEvent = () => {
  const handleDateChange = (e) => {
    console.log(e);
  };

  const handleSubmit = () => {};

  // useEffect(() => {
  //   fetch("http://localhost:5000/events/6078118730c8db4198cf5bb6");
  // }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-center m-5 onSumit={handleSubmit}">
        <form className="form-control">
          <h3>Register as a volunteer</h3>
          <input type="text" name="userName" placeholder="userName" />
          <br />
          <br />
          <input type="text" name="eventName" placeholder="eventName" />
          <br />
          <br />
          <input type="text" name="description" placeholder="userName" />
          <br />
          <br />
          <input type="date" onChange={handleDateChange} name="date" />
          <br />
          <br />
          <button className="btn btn-primary">Registration</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterEvent;
