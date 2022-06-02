import React from "react";
import { Nav } from "react-bootstrap";
const Pagination = ({questionsPerPage , totalQuestions, paginate})=>{
    const pageNumber = [];
  for(let i =1;i<=Math.ceil(totalQuestions/questionsPerPage); i++){
      pageNumber.push(i);
  }  
return(
    <nav>
    <ul className="pagination">
    {pageNumber.map(num=>(
        <li key={num} className="page-item">
            <a onClick={()=>paginate(num)}  className="page-link">
                {num}
            </a>
        </li>
    ))}
    </ul>
    </nav>

)
}

export default Pagination;