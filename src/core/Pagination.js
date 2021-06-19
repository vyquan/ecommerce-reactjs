import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example ">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li onClick={() => paginate(number)} className="page-item">
            <a className="page-link" href="#">
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
          </a>
        </li>
      </ul>
    </nav>
    // <nav>
    //   <ul className='pagination'>
    //     {pageNumbers.map(number => (
    //       <li key={number} className='page-item'>
    //         <a onClick={() => paginate(number)} href='!#' className='page-link'>
    //           {number}
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
  );
};

export default Pagination;
