import React from "react";
import Marks from "./Marks";

const DisplayMarks = () => {
  const students = [
    { name: "Abhishek", roll: 875666, m1: 89, m2: 58, m3: 89 },
    { name: "Rahul", roll: 98666, m1: 79, m2: 78, m3: 69 },
    { name: "Rahul", roll: 98666, m1: 79, m2: 78, m3: 69 },
    { name: "Rahul", roll: 98666, m1: 79, m2: 78, m3: 69 },
    { name: "Rahul", roll: 98666, m1: 79, m2: 78, m3: 69 },
    { name: "Rahul", roll: 98666, m1: 79, m2: 78, m3: 69 },
    { name: "Rahul", roll: 98666, m1: 79, m2: 78, m3: 69 },
  ];
  return (
    <div>
      {students.map((student, index) => (
        <Marks
          key={index}
          name={student.name}
          roll={student.roll}
          m1={student.m1}
          m2={student.m2}
          m3={student.m3}
        />
      ))}
    </div>
  );
};

export default DisplayMarks;