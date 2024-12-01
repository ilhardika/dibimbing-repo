import "../../src/App.css";

export const Navbar = (props) => {
  const { dataLogo, isDarkMode, navList, navIcons } = props; // bisa pakai desturucturing
  //   console.log("lihatProps", props); //cek lemparan dari app.jsx

  return (
    <div
      className="navbar"
      style={{ backgroundColor: isDarkMode ? "gray" : "white" }}
    >
      <div className="logo">
        {/* {props.dataLogo} // bisa pake parameter props */}
        <img src={dataLogo.logoImg} alt="" />
        <h1>{dataLogo.textLogo}</h1>
      </div>
      <div>
        <ul className="nav-items">
          {navList.map((item) => {
            return <a href="#">{item}</a>;
          })}
        </ul>
      </div>
      <div className="social-icons">
        {navIcons.map((item) => {
          return <a href="#">{item.icon}</a>;
        })}
      </div>
    </div>
  );
};
