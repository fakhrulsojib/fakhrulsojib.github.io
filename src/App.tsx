import Header from "./sections/header/Header";
import Home from "./sections/home/Home";
// import About from "./sections/About";
import Skills from "./sections/skill/Skills";
import Projects from "./sections/project/Projects";
import Contact from "./sections/contact/Contact";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Skills />
        {/* <About /> */}
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
