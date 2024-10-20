import React from "react";

export const About = (props) => {
  return (
    <div id="about" className="bg-[#f6f6f6]">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 className="text-[16px]">To register a patient</h2>
              <p className="text-[17px]">To enroll a customer (patient) simply fill out the enrollment form (below) and we’ll take it from there.
              The first action item will be a call from one of our pharmacists to the patient to talk with them about the
              program and make sure their questions are answered completely. Then we’ll schedule the patient for
              their Annual Wellness Visit. That will take about 15 minutes of time and will conclude with a telehealth
              visit by one of our licensed physicians.</p>
              <p className="text-[17px]">After their physician telehealth visit, the patient may be invited to be enrolled in a long-term care
              program such as (1) chronic care management, (2) remote therapeutic monitoring or (3) remote patient
              monitoring – all depending upon their medical history, medications and problems. Our physicians will
              guide us and the patient to the best choice for the patient and of course, we always obtain the patient’s
              consent.</p>
              <p className="text-[17px]">To get started, please fill the form out below and SUBMIT it. That will send the information to our
              clinical team who will contact the patient and discuss the program with them.</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 flex justify-center">
            {" "}
            <img src="img/about.jpg" className="max-h-[510px] max-w-[300px]" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
