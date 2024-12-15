// import "./style.css";
import Navbar from "@/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [profile, setProfile] = useState({});

  const getProfile = async () => {
    const token = localStorage.getItem("access_token");

    // config berisi token
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const res = await axios.get("https://dummyjson.com/auth/me", config);
      console.log("res", res);
      setProfile(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold my-5 text-center">ProfilePage</h1>
      <div className="mx-10">
        <div className="flex justify-center mb-5">
          <img src={profile.image} alt="" />
        </div>
        <p>
          Name: {profile.firstName} {profile.lastName}
        </p>
        <p>Age: {profile.age}</p>
        <p>Gender: {profile.gender}</p>
        <p>Email: {profile.email}</p>
        <p>Phone: {profile.phone}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
