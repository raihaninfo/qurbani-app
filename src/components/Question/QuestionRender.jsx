import React, { useState } from "react";
import allData from "../../allData";
import Question from "./Question";

const QuestionRender = () => {
  const allQuestion = allData.slice(0, 30);
  const [question] = useState(allQuestion);
  return (
    <div className='container'>
      <div className="header py-4">

        <h2 className='py-2'>কুরবানি নিয়ে কিছু প্রশ্ন উত্তর</h2>
        <p className='border-bottom pb-1'>প্রশ্নগুলো মাসিক আল-কাওসার থেকে সংগ্রহ করা</p>
      </div>
      {question.map((question) => (
        <Question question={question} key={question.key}></Question>
      ))}
    </div>
  );
};

export default QuestionRender;
