import Header from "../components/Header";
import skillsHomeMock from "../mocks/skillsMock";

function AboutMe() {

    return (
        <section>
            <Header page="about-me"/>
            <section>
                <h1><b>/</b>about-me</h1>
                <p>Quem sou eu?</p>
            </section>
            <section className='about-me-home-text-main'>
                <p>Olá, me chamo Esdras!</p>
                <p>
                    Sou um desenvolvedor Full-Stack, aprendi a programar e trabalhar em equipe na Trybe,
                    onde fiz diversos projetos sozinho e em conjunto, ensinando diversas pessoas e aprendendo com meus colegas,
                    após concluir a Trybe comecei a fazer diversos free lances onde fui me desenvolvendo e
                    começando a trabalhar com clientes.
                </p>
                <p>
                    Desde pequeno sempre fui interessado em programação e então comecei a estudar sobre, estudando arduino,
                    diversar linguagens como Python e desenvolvimento web, onde eu sempre usei da minha criatividade
                    e busquei aprender mais para criar codigos dinamicos.
                </p>
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

export default AboutMe;