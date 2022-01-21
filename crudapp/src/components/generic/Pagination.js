import React, { useState } from "react";
import "../../styles/Pagination.css";

function Pagination(props) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(props.elements / props.perPage);

  function clickNextPage(event) {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
      props.changeStartIndex(props.perPage); // further start index
    }
  }

  function clickPrevPage(event) {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      props.changeStartIndex(-Math.abs(props.perPage)); // earlier start index
    }
  }

  return (
    <div className="pagination-container">
      <button onClick={clickPrevPage}>{"<"}</button>
      <p className="page-number">
        {page} / {totalPages}
      </p>
      <button onClick={clickNextPage}>{">"}</button>
    </div>
  );
}

export default Pagination;
