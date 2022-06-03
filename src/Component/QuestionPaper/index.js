import React, { useState} from 'react';
import Pagination from '../Pagination';
import { useLocation } from 'react-router-dom';
import Questions from '../Questions';
import { getQuestionPaper } from '../../utility/examService';

const QuestionPaper = () => {
const location = useLocation();
const { state } = useLocation();
const [currentPage, setCurrentPage] = useState(1);
const[questionsPerPage,setPostPerPage]=useState(2);

const indexOfLastQuestion = currentPage *questionsPerPage;
const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
// const data =() => getQuestionPaper(state.examId);
// const currentPost = data.questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

//console.log(currentPost);
const paginate=pagenumber=>setCurrentPage(pagenumber); 
return (
    <div>
        <h3 style={{marginBottom:'50px', marginTop:'20px'}}>Subject : {getQuestionPaper(state.examId).subjectName}</h3>
        <div>
            <Questions questions={getQuestionPaper(state.examId).questions.slice(indexOfFirstQuestion, indexOfLastQuestion)}></Questions>
            <Pagination questionsPerPage={questionsPerPage} totalQuestions={getQuestionPaper(state.examId).questions.length}  paginate={paginate}></Pagination>
        </div>
    </div>
    );
}
export default QuestionPaper;