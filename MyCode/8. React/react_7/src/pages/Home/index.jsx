import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Home = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <Navbar />
      <div className="mx-10">
        <Button
          //   disabled={true}
          label={isDarkMode ? "Dark Mode" : "Light Mode"}
          onClick={toggleTheme}
        />
        <h1 className={isDarkMode ? "text-red-500" : "text-purple-600"}>
          Home
        </h1>
      </div>
    </div>
  );
};

export default Home;
