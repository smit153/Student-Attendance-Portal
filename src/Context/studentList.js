import React, { useState, useEffect } from "react";

const student = [
  {
    name: "Ashok Mani",
    rollNo: 1,
    status: false,
    checkIn: "9:30",
    checkOut: "9:45",
  },
  {
    name: "Arti Meena",
    rollNo: 2,
    status: true,
    checkIn: "9:15",
  },
  {
    name: "Sheela Devaraja",
    rollNo: 3,
    status: true,
    checkIn: "9:33",
  },
];

const StudentContext = React.createContext({
  students: [],
  setStudents: () => {},
  noStd: 0,
});

export const StudentContextProvider = (props) => {
  const [students, setStudents] = useState(student);
  const [noStd, setNoStd] = useState(student.length);

  useEffect(() => {
    const temp = students.filter((e) => e.status === true);
    setNoStd(temp.length);
  }, [students]);

  return (
    <StudentContext.Provider value={{ students, setStudents, noStd }}>
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentContext;
