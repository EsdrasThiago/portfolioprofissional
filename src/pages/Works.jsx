import Header from "../components/Header";
import projectsHomeMock from "../mocks/projectsMock";

function Works() {

    return (
        <section>
            <Header page="projects" />
            <section>
                <h1><b>/</b>Projetos</h1>
                <p>Uma lista dos meus projetos</p>
            </section>
            <section>
                <h1><b>#</b>projetos-completos</h1>
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
        </section>
    );
}

export default Works;