import AboutMeHome from "../components/AboutMeHome";
import ProjectsHome from "../components/ProjectsHome";
import SkillHome from "../components/SkillHome";

function Home() {

  return (
    <main>
      <h1>Esdras, um desenvolvedor Full-Stack</h1>
      <p>Crio sites responsivos onde me aproveito da tecnologia e da criatividade</p>
      <button>Me contate!</button>
      <p>Textin: "Seja uma boa pessoa" - Arataka Reigen</p>
      <ProjectsHome />
      <SkillHome />
      <AboutMeHome />
    </main>
  );
}

export default Home;