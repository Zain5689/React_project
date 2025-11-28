import { useEffect, useState } from "react";
import "./Header.css";
import "../Skills/Skill";
import { Link } from "react-router-dom";
function Header() {
  const [show, setShow] = useState(false);
  const [theme, settheme] = useState("light");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [theme]);

  return (
    <>
      <header className="flex">
        <button
          onClick={() => {
            setShow(true);
          }}
          className="show "
        >
          <span className="icon-menu" />
        </button>

        <div>
          <h2 className="title">Zainab Hilal</h2>
        </div>
        <nav>
          <ul className="flex">
            <li>
              <a href="#hero">About</a>
            </li>
            <li>
              <a href="#skill"> Skills </a>
            </li>
            <li>
              <a href="#projects">Projects </a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="flex icons">
          <Link
            to={"https://github.com/Zain5689"}
            className="icon_1 icon-github"
          />
          <Link
            to={"https://www.linkedin.com/in/zainab-hilal-b5b031225/"}
            className="icon_1 icon-linkedin-square"
          />
          <button
            onClick={() => {
              localStorage.setItem("mode", theme === "dark" ? "light" : "dark");
              settheme(localStorage.getItem("mode"));
            }}
            className="moon flex"
          >
            {theme === "light" ? (
              <span className="icon-moon1"></span>
            ) : (
              <span className="icon-sun"></span>
            )}
          </button>
        </div>

        {show && (
          <div className="fixed">
            <ul className="modal">
              <li>
                <button
                  className="close icon-cross"
                  onClick={() => {
                    setShow(false);
                  }}
                ></button>
              </li>
              <li>
                <a href="#hero">About</a>
              </li>
              <li>
                <a href="#skill"> Skills </a>
              </li>
              <li>
                <a href="#">Projects </a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
