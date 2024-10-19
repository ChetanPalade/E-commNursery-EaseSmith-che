import React from 'react';
import "./Pagination.css"

const Pagination = ({ currentPage, totalPages, onNextPage, onPreviousPage }) => {
  return (
    <div className="pagination" style={{ marginTop: '20px', textAlign: 'center' }}>
      <button
        onClick={onPreviousPage}
        disabled={currentPage === 1}
        style={{
          marginRight: '10px',
          padding: '8px 16px',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
        }}
      >
        Previous
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        style={{
          marginLeft: '10px',
          padding: '8px 16px',
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;


// import React from 'react'

// const Pagination = () => {
  
//   return (
//     <div>
//         <button>Previous</button>
//         <span>Page 1 of X</span>
//         <button>Next</button>
//     </div>
//   )
// }

// export default Pagination

// import React from 'react';
// import "./Pagination.css"

// const Pagination = () => {
//   return (
//     <div className="pagination">
//       <button>Previous</button>
//       <button>1</button>
//       <button>2</button>
//       <button>3</button>
//       <button>Next</button>
//     </div>
//   );
// };

// export default Pagination;

