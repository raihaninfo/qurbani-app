import React from 'react';

const Form = () => {
    return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-10 m-auto">
                    <form>
                        <div className="mb-3">
                            <label for="name" className="form-label">আপনার নাম লিখুন</label>
                            <input className="form-control" type="text" name="" id="name" />
                        </div>
                    
                        <div className='mb-3'>
                            <label for="amount" className="form-label">আপনার কত টাকা আছে ?</label>
                            <input className="form-control" type="number" name="" id="amount" />
                        </div>
                    <p>আপনার উপর কুরবানি ওয়াজিব হয়েছে।</p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Form;