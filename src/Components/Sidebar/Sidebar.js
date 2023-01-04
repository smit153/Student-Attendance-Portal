import React, { useContext } from "react";
import img from "../../Assets/img.jpg";
import StudentContext from "../../Context/studentList";

const Sidebar = () => {
  const ctx = useContext(StudentContext);
  return (
    <div>
      <img className="img-fluid rounded m-2" src={img} alt=""></img>
      <div>Total number of students present is {ctx.noStd}</div>
      <button
        type="button"
        className="btn btn-primary mt-2"
        onClick={() => ctx.setStudents([])}
      >
        Reset Data
      </button>
    </div>
  );
};

export default Sidebar;
