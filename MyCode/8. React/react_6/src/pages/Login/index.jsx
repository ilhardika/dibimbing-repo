// import "./style.css";
import Navbar from "@/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleInputForm = (e) => {
    setForm({
      ...form, // mengambil semua form
      [e.target.name]: e.target.value, // mengambil nilai dari inputan berdasarkan name
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const payload = {
      username: form.username, // mengambil nilai username dari form
      password: form.password, // mengambil nilai password dari form
    };

    try {
      const res = await axios.post("https://dummyjson.com/auth/login", payload);
      localStorage.setItem("access_token", res.data.accessToken);
      localStorage.setItem("refresh_token", res.data.refreshToken);
      setSuccess("Login Berhasil"); // kalau berhasil tampilkan success

      // kalau berhasil login ke homepage 2 detik
      setTimeout(() => {
        navigate("/");
      }, 2000);

      console.log(res);
    } catch (error) {
      console.log("error", error.response); //ambil response error
      setError(error.response.data.message); //ambil message error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          {/* kalau success tampilkan success */}
          {success && <p className="text-green-500">{success}</p>}
          {/* kalau error tampilkan error */}
          {error && <p className="text-red-500">{error}</p>}
          <form className="flex flex-col gap-5">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Username:
              </label>
              <input
                onChange={handleInputForm}
                name="username"
                type="text"
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className=" text-sm font-medium text-gray-700">
                Password:
              </label>
              <input
                onChange={handleInputForm}
                name="password"
                type="text"
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              disabled={loading}
              onClick={handleSubmit}
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md"
            >
              {/* kalau loading tampilkan loading */}
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
