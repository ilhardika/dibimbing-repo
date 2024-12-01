// import { Navbar } from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const productList = [
    {
      id: 1,
      name: "Nike Blazzer 77",
      description: "Mens Shoes",
      image:
        "https://i.pinimg.com/originals/51/2b/4b/512b4b870390fac58da5206e88d228d6.png",
      price: 19.99,
      colors: ["red", "blue", "green"],
    },
    {
      id: 2,
      name: "Nike Samba",
      description: "Woman Shoes",
      image:
        "https://i.pinimg.com/474x/2d/f2/1a/2df21a55894e5f4227312a699fd0a6b4.jpg",
      price: 40,
      colors: ["red", "blue", "green", "white"],
    },
    {
      id: 3,
      name: "Nike Dunk ",
      description: "Mens Shoes",
      image:
        "https://i.pinimg.com/736x/6d/aa/1c/6daa1cf6460e70aa6db3a2794d0adc3a.jpg",
      price: 12,
      colors: ["red", "blue"],
    },
  ];

  return (
    <div>
      {/* bisa pake inline style dari react atau css
      <h1 style={{ backgroundColor: "gray" }} className="text-3xl">
        Hello world!
      </h1> */}
      {/* <Navbar /> */}
      <Products productList={productList} />
    </div>
  );
}

export default App;
