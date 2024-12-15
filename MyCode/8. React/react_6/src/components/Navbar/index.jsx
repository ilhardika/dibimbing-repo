import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="flex justify-center gap-5 py-2 w-full bg-gray-800 text-white items-center">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      {token ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to={"/login"}>Login</Link>
      )}
    </div>
  );
};

export default Navbar;
