// import Test from "@/Test";
import axios from "axios";
import { useState, useEffect } from "react";
// useEffect method (mounting, update, unmounting)

const App = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        "https://api.escuelajs.co/api/v1/products?offset=0&limit=5"
      );
      console.log("res", res.data);
      setProducts(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  const getUsers = () => {
    axios
      .get("https://api.escuelajs.co/api/v1/users?offset=0&limit=5")
      .then((res) => {
        // masukkan data dari api ke state
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getProducts();
    getUsers();
  }, []);

  return (
    <div>
      {/* looping state productnya (title, price, description) */}
      <h1 className="text-5xl">Product</h1>
      {products.map((product) => {
        return (
          <div key={product.id} className="mx-5 my-10">
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            {/* render semua image */}
            {/* {product.images.map((image) => {
              return <img src={image} className="w-30" />;
            })} */}
            {/* render image[0] */}
            <img src={product.images[0]} className="w-24" />
          </div>
        );
      })}

      {/* render users (name, avatar, email) */}
      <h1 className="text-5xl">User</h1>
      {users.map((user) => {
        return (
          <div key={user.id} className="mx-5 my-10">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <img src={user.avatar} className="w-24" />
          </div>
        );
      })}
    </div>
  );
};

export default App;
