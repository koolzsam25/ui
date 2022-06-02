import React, { useState} from 'react';
import Pagination from '../Pagination';
import { useLocation } from 'react-router-dom';
import Questions from '../Questions';
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const QuestionPaper = () => {
const location = useLocation();
const { state } = useLocation();
const [currentPage, setCurrentPage] = useState(1);
const[questionsPerPage,setPostPerPage]=useState(2);

const indexOfLastQuestion = currentPage *questionsPerPage;
const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
const currentPost = data.slice(indexOfFirstQuestion, indexOfLastQuestion);
const paginate=pagenumber=>setCurrentPage(pagenumber); 
return (
    <div>
        <h1>Subject</h1>
        <div>
            <h1>Exam Information: {state.examId}</h1>
            <Questions questions={currentPost}></Questions>
            <Pagination questionsPerPage={questionsPerPage} totalQuestions={data.length}  paginate={paginate}></Pagination>
        </div>
    </div>
    );
}
export default QuestionPaper;