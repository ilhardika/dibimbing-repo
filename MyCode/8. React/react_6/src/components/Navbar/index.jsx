import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-5 py-2 w-full bg-gray-800 text-white items-center">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
