import "../src/App.css";
import { Navbar } from "../components/Navbar";
import logoImg from "./assets/logo.svg";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

export const App = () => {
  const dataLogo = {
    textLogo: "Furniro",
    logoImg: logoImg,
  };

  const navList = ["Home", "Shop", "About", "Contact"];

  const navIcons = [
    {
      id: 1,
      icon: <CiUser />,
    },
    {
      id: 2,
      icon: <CiSearch />,
    },
    {
      id: 3,
      icon: <CiHeart />,
    },
    {
      id: 4,
      icon: <CiShoppingCart />,
    },
  ];

  return (
    <div>
      <Navbar
        dataLogo={dataLogo}
        isDarkMode={false}
        navList={navList}
        navIcons={navIcons}
      />
    </div>
  );
};
