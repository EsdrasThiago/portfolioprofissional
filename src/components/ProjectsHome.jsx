import { Link } from "react-router-dom";
import projectsHomeMock from "../mocks/projectsMock";
import '../styles/ProjectsHomeStyle.css'

function ProjectsHome() {

    return (
        <section className="project-home-main">
            <section className="project-home-title-main">
                <section>
                    <h1><b>#</b>Projetos</h1>
                    <hr />
                </section>
                <Link className="project-home-more">
                    <p>Ver mais</p>
                </Link>
            </section>
            <section className="project-home-cards">
                {projectsHomeMock.map((e) => (
                    <section className="project-home-card">
                        <img src={e.image} alt={e.name} className="project-home-img"/>
                        <p className="project-home-stacks">{e.stacks}</p>
                        <hr className="project-home-hr-bot" />
                        <h1 className="project-home-title-card">{e.name}</h1>
                        <p className="project-home-description">{e.description}</p>
                        <button>Site</button>
                    </section>
                ))}
            </section>
        </section>
    );
}

export default ProjectsHome;