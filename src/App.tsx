import Header from "./sections/header/Header";
import Home from "./sections/home/Home";
import Skills from "./sections/skill/Skills";
import Projects from "./sections/project/Projects";
import Footer from "./sections/footer/Footer";
import Education from "./sections/Education";
import Experience from "./sections/experience/Experience";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Footer />
      </main>
    </>
  );
};

export default App;
