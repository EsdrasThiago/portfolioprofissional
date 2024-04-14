import '../styles/AboutMeHomeStyle.css'

function AboutMeHome() {

    return (
        <section className="about-me-home-main">
            <section className="about-me-home-title">
                <h1><b>#</b>Sobre Mim</h1>
                <hr />
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
                <button className='about-me-home-button'>
                    <p>Ler mais</p>
                </button>
        </section>
    );
}

export default AboutMeHome;