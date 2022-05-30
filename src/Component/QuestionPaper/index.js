import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
const QuestionPaper = () => {
    const location = useLocation();
    
    return (
    <div>
        <h1>Subject</h1>
        <div>
            <h1>Exam Information</h1>
            {/* https://www.freeonlinetest.in/online-exam/aptitude/simple-interest/1 */}
        </div>
          
    </div>
    );
}
export default QuestionPaper;