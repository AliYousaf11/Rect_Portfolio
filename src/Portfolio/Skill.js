import React from "react";
import "./Skill.css";
import SkillBox from "./SkillBox";

function Skill() {
  return (
    <div className="skill">
      <div className="one">
        <span>My-Skills</span>
      </div>
      <div className="two">
        <div className="Skill_left">
          <div className="left_inner">
          <h3>Skills Reflect Our Knowledge</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            perferendis repellat voluptas laudantium ratione minus temporibus
            praesentium quibusdam delectus veniam, iusto a recusandae eius
            porro, eum maiores quis alias facere?
          </p>
          <h3>Fresh Experence</h3>
        </div>
          </div>

        <div className="Skill_right">
          <div className="right_inner">
          <div className="box">
            <SkillBox
            name = "React"
            percentage= "20"
            />
            <SkillBox
            name = "JAVASCRIPT"
            percentage= "65"
            />
            
          </div>
          <div className="box">
          <SkillBox
            name = "HTML/CSS"
            percentage= "90"
            />
            <SkillBox
            name = "C++ (OPP)"
            percentage= "65"
            />
          </div>
          <div className="box">
          <SkillBox
            name = "JAVA"
            percentage= "20"
            />
            <SkillBox
            name = "MYSQL"
            percentage= "65"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
