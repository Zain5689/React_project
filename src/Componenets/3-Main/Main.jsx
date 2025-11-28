import { useState } from "react";
import { data } from "../../index";
import "./Main.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Main() {
  const [active, setActive] = useState("all");
  const [displayedProjects, setDisplayedProjects] = useState(data);

  const filterProjects = (category) => {
    if (category === "all") {
      setDisplayedProjects(data);
    } else {
      const filteredProjects = data.filter(
        (item) => item.category.toLowerCase() === category
      );
      setDisplayedProjects(filteredProjects);
    }
    setActive(category);
  };

  return (
    <main className="flex" id="projects">
      <div className="left">
        <div className="buttons flex">
          <button
            onClick={() => filterProjects("all")}
            className={active === "all" ? "active" : null}
          >
            ALL Projects
          </button>
          <button
            onClick={() => filterProjects("css")}
            className={active === "css" ? "active" : null}
          >
            HTML & CSS
          </button>
          <button
            onClick={() => filterProjects("js")}
            className={active === "js" ? "active" : null}
          >
            JavaScript
          </button>
          <button
            onClick={() => filterProjects("boot")}
            className={active === "boot" ? "active" : null}
          >
            Bootstrap
          </button>
          <button
            onClick={() => filterProjects("tail")}
            className={active === "tail" ? "active" : null}
          >
            Tailwind
          </button>
          <button
            onClick={() => filterProjects("react")}
            className={active === "react" ? "active" : null}
          >
            React
          </button>
        </div>
      </div>
      <div className="right flex">
        <AnimatePresence>
          {displayedProjects.map((item) => (
            <motion.div
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 15, stiffness: 100 }}
              className="card"
              key={item.id}
            >
              <img src={item.image} width={266} className="card-img" alt="" />
              <div className="card-body" style={{ width: "266px" }}>
                <h2 className="title">{item.title}</h2>
                <p>{item.paragraph}</p>
                <div className="flex icons">
                  <div className="flex icon">
                    <Link className="icon-link icon_link" to={item.link}></Link>
                    <Link
                      className="icon-github icon_link"
                      to={item.github}
                    ></Link>
                  </div>
                  <div className="flex arrow">
                    <a href="#">More</a>
                    <button className="icon-long-arrow-right"></button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default Main;
