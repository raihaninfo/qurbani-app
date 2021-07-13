import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [check, setCheck] = useState({
    name: "",
    amount: "",
    message: "",
  });

  const handleBlur = (e) => {
    const newCheck = { ...check };
    newCheck[e.target.name] = e.target.value;
    setCheck(newCheck);
  };

  // let name = check.amount
  // console.log(name)


  
  let handleSubmit = (e) => {
    if(check.name && check.amount){
      const newCheck = { ...check };
      
      if (check.amount > 50000) newCheck["message"] = "Hoise";
      else newCheck["message"] = "Hoy Nai";
      
      setCheck(newCheck);
    }
    e.preventDefault();
  };

  return (
    <div>
      <div className="container">
        <div className="row form-row">
          <div className="col-md-10 m-auto ">
            <form className="mt-4 " onSubmit={handleSubmit}>
              <h2>জেনে নিন আপনার কুরবানি ওয়াজিব হয়েছে কিনা..</h2>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  আপনার নাম লিখুন
                </label>
                <input
                  onBlur={handleBlur}
                  placeholder="আপনার নাম লিখুন"
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                  প্রয়োজনের অতিরিক্ত আপনি কত টাকার মালিক ?
                </label>
                <input
                  onBlur={handleBlur}
                  required
                  placeholder="আপনার সম্পত্তির পরিমান লিখুন (সংখ্যাই)"
                  className="form-control"
                  type="number"
                  name="amount"
                  id="amount"
                />
              </div>
              <div className="mb-3">
                <input
                  className="font-control btn-primary form-submit"
                  type="submit"
                  value="এখানে ক্লিক করুন"
                  name="submit"
                />
              </div>
            </form>
            <p>
            {check.message}
              {/* প্রিয় (নাম) আপনার উপর কুরবানি ওয়াজিব হয়েছে।, কুরবানির প্রস্তুতি
              নেয়ার আহবান রইল, <Link to="/details">বিস্তারিত আরও জানুন</Link>{" "} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
