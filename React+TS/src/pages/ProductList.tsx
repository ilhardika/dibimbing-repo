import { useSearchParams } from "react-router";

function ProductList() {
  // useSearchParams itu untuk ambil query params dari url
  // misal url = /products?sort=asc&name=kemeja
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSort = (sortValue: string) => {
    // setSearchParams itu untuk set query params di url
    // sortValue itu value yang mau di set ke query params
    searchParams.set("sort", sortValue);
    // ganti state searchParams jadi yang baru
    setSearchParams(searchParams);
  };

  return (
    <div>
      ProductList
      <ul>
        <li>sort = {searchParams.get("sort")}</li>
        <li>name = {searchParams.get("name")}</li>
      </ul>
      {/* tambahkan parameter pada function untuk mengisi nilai yang ingin dicari */}
      <button onClick={() => handleSort("popular")} >Sort Popular</button>
      <button onClick={() => handleSort("newest")} >Sort Newest</button>
      
      {/* OPSI LAIN DROPDOWN */}
      {/* <select
        name="productSort"
        id="productSort"
        onChange={(e) => handleSort(e.target.value)}
        value={searchParams.get("sort") || "popular"} // Default atau nilai yang dipilih sebelumnya
      >
        <option value="popular">Popular</option>
        <option value="newest">Newest</option>
      </select> */}
    </div>
  );
}

export default ProductList;
