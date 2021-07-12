import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

const Form = () => {
    return (
    <div>
        <div className="container">
            <div className="row form-row">
                <div className="col-md-10 m-auto ">
                    <form className='mt-4 '>
                        <h2>জেনে নিন আপনার কুরবানি ওয়াজিব হয়েছে কিনা..</h2>
                        <div className="mb-3">
                            <label for="name" className="form-label">আপনার নাম লিখুন</label>
                            <input placeholder="আপনার নাম লিখুন" className="form-control" type="text" name="" id="name" />
                        </div>
                    
                        <div className='mb-3'>
                            <label for="amount" className="form-label">আপনার কত টাকা আছে ?</label>
                            <input placeholder="আপনার সম্পত্তির পরিমান লিখুন (সংখ্যাই)" className="form-control" type="number" name="" id="amount" />
                        </div>
                    <p>প্রিয় (নাম) আপনার উপর কুরবানি ওয়াজিব হয়েছে।, কুরবানির প্রস্তুতি নেয়ার আহবান রইল, <Link to="/details">বিস্তারিত আরও জানুন</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Form;