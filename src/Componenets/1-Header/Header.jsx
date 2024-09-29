import { useEffect, useState } from "react";
import "./Header.css";
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
        <div />
        <nav>
          <ul className="flex">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Speaking</a>
            </li>
            <li>
              <a href="#">Uses</a>
            </li>
          </ul>
        </nav>
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
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Articles</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Speaking</a>
              </li>
              <li>
                <a href="#">Uses</a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
