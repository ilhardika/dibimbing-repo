import Navbar from "../../components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const About = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <Navbar />
      <div className="mx-10">
        <button onClick={toggleTheme}>
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </button>
        <h1 className={isDarkMode ? "text-black" : "text-purple-800"}>About</h1>
      </div>
    </div>
  );
};

export default About;
