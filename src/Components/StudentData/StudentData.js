import React from "react";

const StudentData = ({ std, checkOutHandler }) => {
  return (
    <div className="container mt-3 mb-3">
      <div className="border border-secondary border border-3 rounded w-100">
        <div className="d-flex justify-content-between  fs-4 m-1  ">
          <div className="m-0 p-0">
            <div className=" d-inline me-2 fs-6 fw-bold">Name: </div>
            <div className=" d-inline me-2 fs-6 ">{std.name} </div>
          </div>
          <div className="m-0 p-0">
            <div className=" d-inline me-2 fs-6 fw-bold">Roll Number: </div>
            <div className=" d-inline me-2 fs-6 ">{std.rollNo} </div>
          </div>
        </div>
        <div className="d-flex justify-content-between  fs-4 m-1  ">
          <div className="m-0 p-0">
            <div className=" d-inline me-2 fs-6 fw-bold">Check In: </div>
            <div className=" d-inline me-2 fs-6 ">{std.checkIn} </div>
          </div>
          {std.status ? (
            <button
              className="btn btn-danger m-1"
              onClick={() => checkOutHandler(std.rollNo)}
            >
              Check Out
            </button>
          ) : (
            <div className="m-0 p-0">
              <div className=" d-inline me-2 fs-6 fw-bold">check out: </div>
              <div className=" d-inline me-2 fs-6 ">{std.checkOut} </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentData;
