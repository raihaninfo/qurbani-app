import React from 'react';

const Form = () => {
    return (
        <>
        <div className="container">
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">আপনার নাম লিখুন</label>
                    <input className="form-control" type="text" name="" id="name" />
                </div>
                
                <div className='mb-3'>
                    <label for="amount" className="form-label">আপনার কত টাকা আছে ?</label>
                    <input className="form-control" type="number" name="" id="amount" />
                </div>
            </form>
        </div>
    </>
    );
};

export default Form;