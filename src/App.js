import logo from "./logo.svg";
import "./App.css";
import "./align.css";
import Header from "./component/header/header";
import About from "./component/about/about";
import Contact from "./component/content/content";
import Testimonials from "./component/testimonials/testimonials";
import Phylosophy from "./component/phylosophy/phylosophy";
import Footer from "./component/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Contact />
      <Testimonials />
      <Phylosophy />
      <Footer />
    </div>
  );
}

export default App;
