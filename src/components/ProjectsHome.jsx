import projectsHomeMock from "../mocks/projectsMock";

function ProjectsHome() {

    return (
        <section>
            <h1><b>#</b>Projetos</h1>
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