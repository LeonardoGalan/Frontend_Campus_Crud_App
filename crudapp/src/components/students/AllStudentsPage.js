import React, { useState } from "react";
import { StudentCard } from "../index";
import { Pagination } from "../index";
import { STUDENTS_PER_PAGE } from "../../constants";
import "../../styles/AllStudentsPage.css";

function AllStudentsPage() {
  const [startIndex, setStartIndex] = useState(0);

  const cards = [
    <StudentCard key="1" email="sean" />,
    <StudentCard key="2" />,
    <StudentCard key="3" />,
    <StudentCard key="4" />,
    <StudentCard key="5" />,
    <StudentCard key="6" />,
    <StudentCard key="7" />,
    <StudentCard key="8" />,
    <StudentCard key="9" email="billy" />,
    <StudentCard key="10" />,
    <StudentCard key="11" />,
    <StudentCard key="12" />,
    <StudentCard key="13" />,
    <StudentCard key="14" />,
    <StudentCard key="15" />,
    <StudentCard key="16" />,
    <StudentCard key="17" email={"lucy"} />,
    <StudentCard key="18" />,
    <StudentCard key="19" />,
    <StudentCard key="20" />,
    <StudentCard key="21" />,
    <StudentCard key="22" email={"carl"} />,
  ];

  /* display students from different starting index based on page number */
  const displayStudentCards = cards.slice(
    startIndex < 0 ? 0 : startIndex,
    startIndex + STUDENTS_PER_PAGE || cards.length
  );

  function updateStartIndex(perPage) {
    setStartIndex((prevStartIndex) => prevStartIndex + perPage);
  }

  return (
    <>
      <h2 className="all-student-header">Students</h2>
      <hr />
      <div className="all-student-container">{displayStudentCards}</div>
      <Pagination
        elements={cards.length}
        perPage={STUDENTS_PER_PAGE}
        changeStartIndex={updateStartIndex}
      />
    </>
  );
}

export default AllStudentsPage;
