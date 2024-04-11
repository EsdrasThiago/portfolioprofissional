import projectsHomeMock from "../mocks/projectsMock";

function ProjectsHome() {

    return (
        <section>
            <section className="project-home-title-main">
                <h1><b>#</b>Projetos</h1>
                <hr />
            </section>
            {projectsHomeMock.map((e) => (
                <section>
                    <h1>{e.name}</h1>
                    <p>{e.stacks}</p>
                    <p>{e.description}</p>
                </section>
            ))}
        </section>
    );
}

export default ProjectsHome;