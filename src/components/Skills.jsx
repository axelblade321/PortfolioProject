import "../styles/skills.css";
import skills from "../data/skills";

function Skills(){
  return (
    <section id="skills" className="section">

      <h2>Skills</h2>

      <div className="skills-grid">

        {skills.map((category) => (

          <div className="skill-card" key={category.title}>

            <h3>{category.title}</h3>

            <ul>
              {category.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;