import React from "react";
import "./Service.css";
import ServiceBox from "./ServiceBox";

function Service() {
  return (
    <div className="service">
      <div className="one"> <span>Service</span> </div>

      
       <div className="up">
           <ServiceBox
           title="Wed Development"
           text = "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate."
           />

            <ServiceBox
           title="Graphic Design"
           text = "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate."
           />
            <ServiceBox
           title="Digital Marketing"
           text = "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate."
           />
       </div>

       <div className="down">
           <ServiceBox
           title="Icon Design"
           text = "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate."
           />

            <ServiceBox
           title="Photography"
           text = "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate."
           />
            <ServiceBox
           title="Apps Devlopment"
           text = "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrat."
           />
       </div>

    </div>
  );
}

export default Service;
