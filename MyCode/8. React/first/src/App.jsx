import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Footer />

      {/* <h1>Halo { name }</h1> */}
      {/* <p>hasil dari 1 + 1 = { 1 + 1 }</p> */}
      {/* {isSingle ? <p>Single</p> : <p>Not Single</p>} */}
      {/* <p>status : { renderStatus() }</p> */}
    </div>
  );

  // const name = "ilham";
  // const isSingle = true

  // const renderStatus = () => {
  //   if (isSingle) return 'Single' // bisa ga pakai html
  //   return <p>Not Single</p> // bisa pakai html
  // }
};

// return cuma bisa 1 elemen
// retrun isinya html
// diatas return itu js
// panggil js pakai {}
// export bisa ngga default
