import AboutMeHome from "../components/AboutMeHome";
import Header from "../components/Header";
import ProjectsHome from "../components/ProjectsHome";
import SkillHome from "../components/SkillHome";
import '../styles/HomeStyle.css';

function Home() {

  return (
    <section className="main-home">
      <Header page="home" />
      <h1 className="home-title">Esdras, um desenvolvedor <b>Full-Stack</b></h1>
      <p className="home-description">Crio sites responsivos onde me aproveito da tecnologia e da criatividade</p>
      <button>Me contate ! !</button>
      <section className="home-geek-text">
        <p className="home-reigen-phrase">O verdadeiro encanto é a gentileza, vire uma boa pessoa</p>
        <p className="home-reigen">- Arataka Reigen</p>
      </section>
      <ProjectsHome />
      <SkillHome />
      <AboutMeHome />
    </section>
  );
}

export default Home;