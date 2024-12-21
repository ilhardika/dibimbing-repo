import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-10 py-3 bg-gray-300 mb-5">
      <ul className="flex gap-5 justify-center items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
