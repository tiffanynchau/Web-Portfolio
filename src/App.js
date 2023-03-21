import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Experiences } from "./components/Experiences ";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Banner />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
