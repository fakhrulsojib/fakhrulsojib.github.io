import Header from "./sections/header/Header";
import Home from "./sections/Home";
// import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

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
