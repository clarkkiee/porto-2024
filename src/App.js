import About from "./component/About";
import Experiences from "./component/Experiences";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">
      <div className="h-[200vh]">
        <Hero/>
        <About/>
        <Skills/>
        <Experiences/>
        <Contact/>
      </div>

    </div>
  );
}

export default App;
