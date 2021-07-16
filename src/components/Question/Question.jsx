import React from "react";

const Question = (props) => {
  let { question, answer, key, address, ref } = props.question;
  let keyWithHash = `#${key}`;
  return (
    <div>
      <div className="question">
        <div className="container">
          <div className="border m-3 p-3 shadow text-align-all">
            <h2>
              <p
                className="h5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={keyWithHash}
                aria-expanded="false"
                aria-controls={key}
              >
                {question}
                <p className="h6">প্রশ্ন করেছেন : {address}</p>
              </p>
              
            </h2>

            <div className="collapse" id={key}>
              <div className="card card-body">
                {answer}
                <p>দলিলঃ-{ref}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
