import Header from "./sections/header/Header";
import Home from "./sections/home/Home";
import Skills from "./sections/skill/Skills";
import Projects from "./sections/project/Projects";
import Footer from "./sections/footer/Footer";
import Education from "./sections/Education";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Skills />
        <Education />
        <Projects />
        <Footer />
      </main>
    </>
  );
};

export default App;
