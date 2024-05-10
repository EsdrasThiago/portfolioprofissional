import Header from "../components/Header";
import projectsHomeMock from "../mocks/projectsMock";
import "../styles/Works.css"

function Works() {

    return (
        <section className="project-main">
            <Header page="projects" />
            <section className="project-title-main">
                <h1><b>/</b>Projetos</h1>
                <p>Lista dos meus projetos</p>
            </section>
            <section className="complete-projects-main">
                <h1 className="complete-projects-main-title"><b>#</b>projetos-completos</h1>
                <section className="project-home-cards">
                    {projectsHomeMock.map((e) => (
                        <section className="project-home-card">
                            <img src={e.image} alt={e.name} className="project-home-img" />
                            <p className="project-home-stacks">{e.stacks}</p>
                            <hr className="project-home-hr-bot" />
                            <h1 className="project-home-title-card">{e.name}</h1>
                            <p className="project-home-description">{e.description}</p>
                            <button>Site</button>
                        </section>
                    ))}
                </section>
            </section>
                    <section className="works-space" />
        </section>
    );
}

export default Works;