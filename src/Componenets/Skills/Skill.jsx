import { skills } from "../../index";
import "./Skill.css";
const Skill = () => {
  return (
    <>
      <section className="skills" id="skill">
        <h1>Programming Skills</h1>
        <div className="flex skills_content">
          {skills.map((item) => (
            <div key={item.id} className="flex">
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Skill;
