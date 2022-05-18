import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <span>About</span>

      <div className="about_content">
        <div className="left">
          <div className="inner_left">
            <img src="./a/ali.png" alt="" />
          </div>
        </div>

        <div className="right">
          <div className="innerright">
            <h4>Developing Is My Passion</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vol
              voluptatem vitae, adipisci odit quae molestiae soluta quia, unde
              et error aperiam possimus magnam voluptatibus iure ex repudiandae
              provident de voluptatem vitae, adipisci odit quae molestiae soluta
              quia, unde et error aperiam possimus magnam vol voluptatem vitae,
              adipisci odit quae molestiae soluta quia, unde et euptatum Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatum
              rror aperiam possimus magnam voluptatibus iure ex repu ure ex
              repudiandae provident delectus.
            </p>

            <button>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
