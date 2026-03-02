import Header from "./sections/header/Header";
import Home from "./sections/home/Home";
import Skills from "./sections/skill/Skills";
import Projects from "./sections/project/Projects";
import Footer from "./sections/footer/Footer";
import Education from "./sections/education/Education";
import Experience from "./sections/experience/Experience";
import CompetitiveProgramming from "./sections/competetive-programming/CompetitiveProgramming";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Skills />
        <Experience />
        <CompetitiveProgramming />
        <Education />
        <Projects />
        <Footer />
      </main>
    </>
  );
};

export default App;
