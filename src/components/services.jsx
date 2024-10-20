import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 className="text-[16px]">Our Services</h2>
          <p>
            CareONE’s Preventative Health Services are designed to pinpoint the areas of healthcare that you need to focus on – and then give you the care you need for those areas of concern.
            You will be under the vigilant care of our clinical team, which includes nurses, pharmacists and physicians. You can expect consistent care that extends from week-to-week, month-to-month and year-to-year.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3 className="text-[17px]">{d.name}</h3>
                    <p className="text-[17px]">{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
