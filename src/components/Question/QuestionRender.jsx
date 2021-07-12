import React, { useState } from 'react';
import allData from '../../allData';
import Question from './Question';

const QuestionRender = () => {
    const first20 = allData.slice(0, 20);
    const [question] = useState(first20);
    return (
        <div>
            <div className="header my-4">
                <h2>কুরবানি নিয়ে কিছু প্রস্ন উত্তর</h2>
                <p>প্রশ্নগুলো মাসিক আল-কাওসার থেকে সংগ্রহ করা</p>
            </div>
                {question.map((question)=>(
                <Question question={question} key={question.key}></Question>
            ))}
        </div>
    );
};

export default QuestionRender;