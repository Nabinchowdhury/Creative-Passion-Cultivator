import "./QuestionAnswers.css"
import React from 'react';

const QuestionAnswers = () => {
    return (
        <div className="allQA">
            <div className="questionAnswers">
                <h2>1. How does react work?</h2>
                <h3>Answer: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</h3>
            </div>
            <div className="questionAnswers">
                <h2>2. Differentiate between Props and state</h2>
                <h3>Answer: State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</h3>
            </div>
            <div className="questionAnswers">
                <h2>3. What are the uses of useEffect in react?</h2>
                <h3>Answer: The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. </h3>
            </div>
        </div>
    );
};

export default QuestionAnswers;