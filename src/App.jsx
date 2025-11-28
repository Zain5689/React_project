import { useEffect, useState } from "react";
import Header from "./Componenets/1-Header/Header";
import Hero from "./Componenets/2-Hero/Hero";
import Main from "./Componenets/3-Main/Main";
import Contact from "./Componenets/4-Contact/Contact";
import Footer from "./Componenets/5-Footer/Footer";
import Skill from "./Componenets/Skills/Skill";

function App() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="container">
        <Header id="Scroll-up" />
        <Hero />
        <div className="bodder_div" />

        <Skill />
        <div className="bodder_div" />
        <Main />
        <div className="bodder_div" />

        <Contact />
        <div className="bodder_div" />

        <Footer />
        <a
          style={{ opacity: scroll ? 1 : 0, transition: "1s" }}
          href="Scroll-up"
        >
          <button className="icon-chevron-up scroll-up"></button>
        </a>
      </div>
    </>
  );
}

export default App;
