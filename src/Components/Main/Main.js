import React, { useContext, useState } from "react";
import StudentData from "../StudentData/StudentData";
import StudentContext from "../../Context/studentList";

const Main = () => {
  const ctx = useContext(StudentContext);
  const [err, setErr] = useState({ name: false, rollNo: false });
  const [newStd, setNewStd] = useState({
    name: "",
    rollNo: "",
    status: true,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    if (!err.name && !err.rollNo && newStd.name && newStd.rollNo) {
      var d = new Date();

      ctx.setStudents([
        ...ctx.students,
        { ...newStd, checkIn: d.getHours() + ":" + d.getMinutes() },
      ]);
      setNewStd({ name: "", rollNo: "", status: true });
    }
  };

  const checkOutHandler = (rollNo) => {
    const index = ctx.students.findIndex((e) => e.rollNo === rollNo);
    const tempList = ctx.students;
    var d = new Date();
    tempList[index] = {
      ...tempList[index],
      checkOut: d.getHours() + ":" + d.getMinutes(),
      status: false,
    };
    ctx.setStudents([...tempList]);
  };

  return (
    <div>
      <div className="form-container">
        <form
          className="shadow-lg p-3 mb-5 bg-body rounded mt-3"
          onSubmit={submitHandler}
        >
          <div className="g-3 align-items-bottom d-flex justify-content-between row">
            <div className="col-auto">
              <label className="fw-bold  ">Name</label>
              <input
                type="text"
                className="form-control ms-1"
                placeholder="Name"
                value={newStd.name}
                onChange={(e) => {
                  setNewStd({ ...newStd, name: e.target.value });

                  if (!e.target.value) setErr({ ...err, name: true });
                  else setErr({ ...err, name: false });
                }}
              />
              {err.name ? (
                <div className="form-text text-danger">Enter valid name!</div>
              ) : (
                <div className="form-text text-secondary">Enter a name</div>
              )}
            </div>
            <div className="col-auto">
              <label className="fw-bold  ms-5">Roll Number</label>
              <div className="form-check ms-3 ">
                <input
                  className="form-control ms-3"
                  type="text"
                  placeholder="Roll Number"
                  value={newStd.rollNo}
                  onChange={(e) => {
                    setNewStd({ ...newStd, rollNo: e.target.value });
                    if (isNaN(e.target.value)) setErr({ ...err, rollNo: true });
                    else setErr({ ...err, rollNo: false });
                    const checkRollNo = (obj) =>
                      obj.rollNo === parseInt(e.target.value);
                    if (ctx.students.some(checkRollNo))
                      setErr({ ...err, rollNo: true });
                  }}
                />
                {err.rollNo ? (
                  <div className="form-text text-danger ms-2">
                    Enter valid Roll No.!
                  </div>
                ) : (
                  <div className="form-text text-secondary ms-2">
                    Enter a unique Roll No
                  </div>
                )}
              </div>
            </div>
            <div className="col-auto">
              <input
                className="btn btn-primary "
                type="submit"
                value="Add Student"
              />
            </div>
          </div>
        </form>
      </div>
      {ctx.students.map((std, ind) => (
        <StudentData key={ind} std={std} checkOutHandler={checkOutHandler} />
      ))}
    </div>
  );
};

export default Main;
