import React from "react";
import {Page} from './styles';
const Pagination = ({ totalQuestions, paginate, currentPage }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalQuestions); i++) {
        pageNumber.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map(num => (
                    <li key={num} className="page-item">
                        <Page isCurrentPage={num === currentPage} onClick={() => paginate(num)} className="page-link">
                            {num}
                        </Page>
                    </li>
                ))}
            </ul>
        </nav>

    )
}

export default Pagination;