import { useState } from "react";
import "./style.css";
const linkList = [
  {
    text: "About",
    link: "#about",
  },
  {
    text: "Team",
    link: "#team",
  },
  {
    text: "Buy $CAC",
    link: "#buy",
  },
  {
    text: "Roadmap",
    link: "#roadmap",
  },
];

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="header border-b-2 border-white py-6 relative">
      <div className="container">
        <ul className="md:flex justify-end hidden ">
          {linkList.map((val, i) => (
            <li key={i}>
              <a href={val.link} className="px-6 text-2xl">
                {val.text}
              </a>
            </li>
          ))}
        </ul>
        <div className=" flex justify-end md:hidden">
          <button
            className="text-xl"
            onClick={() => setActive((prev) => !prev)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className={`mobile-nav bg-blue-dark ${active ? "active" : ""}`}>
          {linkList.map((val, i) => (
            <li key={i} className="text-center">
              <a
                href={val.link}
                className="py-3 inline-block  text-2xl"
                onClick={() => setActive((prev) => !prev)}
              >
                {val.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
