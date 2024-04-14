import skillsHomeMock from "../mocks/skillsMock";
import '../styles/SkillsHomeStyle.css'

function SkillHome() {

    return (
        <section className="skills-home-main">
            <section className="skill-home-title">
                <h1><b>#</b>Habilidades</h1>
                <hr />
            </section>
            <section className="skills-home-cards">
                {skillsHomeMock.map((e) => (
                    <section className="skills-home-card">
                        <h1 className="skills-home-title">{e.name}</h1>
                        <hr />
                        <section className="skills-home-text">
                            {e.text.map((el) => (
                                <p>{el}</p>
                            ))}
                        </section>
                    </section>
                ))}
            </section>
        </section>
    );
}

export default SkillHome;