import AboutMeHome from "../components/AboutMeHome";
import Header from "../components/Header";
import ProjectsHome from "../components/ProjectsHome";
import SkillHome from "../components/SkillHome";

function Home() {

  return (
    <section className="main-home">
      <Header page="home" />
      <h1>Esdras, um desenvolvedor <b>Full-Stack</b></h1>
      <p>Crio sites responsivos onde me aproveito da tecnologia e da criatividade</p>
      <button>Me contate!</button>
      <p>Textin: "Seja uma boa pessoa" - Arataka Reigen</p>
      <ProjectsHome />
      <SkillHome />
      <AboutMeHome />
    </section>
  );
}

export default Home;