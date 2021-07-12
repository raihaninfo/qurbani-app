import React from 'react';

const Question = () => {
    return (
        <div>
            <div className="header mb-3">
                <h2>কুরবানি নিয়ে কিছু প্রস্ন উত্তর</h2>
                <p>প্রশ্নগুলো মাসিক আল-কাওসার থেকে সংগ্রহ করা</p>
            </div>
            <div className="question">
            <div className="container">
                <div>
                    <h2>
                    <p
                        className="h2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#a"
                        aria-expanded="false"
                        aria-controls="a"
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.?
                    </p>
                    </h2>

                    <div className="collapse" id="a">
                    <div className="card card-body">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi, debitis placeat rem ipsam ea id veritatis similique dolore perferendis alias, pariatur earum quibusdam. Iure labore dolorem ex quis quidem.
                    </div>
                    </div>
                </div>
                </div>
                        </div>

        </div>
    );
};

export default Question;