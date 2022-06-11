import React, { useState } from 'react';
import Pagination from '../Pagination';
import { useLocation } from 'react-router-dom';
import Questions from '../Questions';
import { getQuestionPaper } from '../../utility/examService';
import { QuestionWrapper } from './styles';

const QuestionPaper = () => {
    const { state } = useLocation();
    const [currentPage, setCurrentPage] = useState(1);
    const [questionOption, setQuestionOption] = useState(new Map());

    const indexOfLastQuestion = currentPage;
    const indexOfFirstQuestion = indexOfLastQuestion;
    // const data =() => getQuestionPaper(state.examId);
    // const currentPost = data.questions.slice(indexOfFirstQuestion, indexOfLastQuestion);


    const updateOption = (key, value) => {
        console.log('I am here', key, value);
        setQuestionOption(map => new Map(map.set(key, value)));
    }
    const totalQuestions = getQuestionPaper(state.examId).questions.length;
    const paginate = pagenumber => setCurrentPage(pagenumber);
    console.log("IMH ", JSON.stringify(getQuestionPaper(state.examId).questions[currentPage - 1]));
    return (
        <div>
            <h3 style={{ marginBottom: '50px', marginTop: '20px' }}>Subject : {getQuestionPaper(state.examId).subjectName}</h3>
            <QuestionWrapper>
                <Pagination totalQuestions={totalQuestions} currentPage={currentPage} paginate={paginate}></Pagination>
                <Questions totalQuestions={totalQuestions} questionIndex={indexOfFirstQuestion} updateOption={updateOption} questionOption={questionOption} question={getQuestionPaper(state.examId).questions[currentPage - 1]}></Questions>

            </QuestionWrapper>
        </div>
    );
}
export default QuestionPaper;