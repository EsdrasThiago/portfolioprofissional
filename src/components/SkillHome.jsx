import skillsHomeMock from "../mocks/skillsMock";

function SkillHome() {

    return (
        <section>
            <h1><b>#</b>Habilidades</h1>
            {skillsHomeMock.map((e) => (
                <section>
                    <h1>{e.name}</h1>
                    {e.text.map((el) => (
                        <p>{el}</p>
                    ))}
                </section>
            ))}
        </section>
    );
}

export default SkillHome;