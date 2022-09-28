import "./QuestionAnswers.css"
import React from 'react';

const QuestionAnswers = () => {
    return (
        <div className="allQA">
            <div className="questionAnswers">
                <h2>1. How does react work?</h2>
                <h3>Answer:</h3>
            </div>
            <div className="questionAnswers">
                <h2>2. Differentiate between Props and state</h2>
                <h3>Answer:</h3>
            </div>
            <div className="questionAnswers">
                <h2>3. What are the uses of useEffect in react?</h2>
                <h3>Answer:</h3>
            </div>
        </div>
    );
};

export default QuestionAnswers;