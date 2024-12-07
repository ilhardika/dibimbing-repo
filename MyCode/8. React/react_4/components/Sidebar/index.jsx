// import { IoMdClose } from "react-icons/io";

const Sidebar = ({ onAdd }) => {
  const number = 10;

  return (
    // <div className={`flex flex-col justify-center items-start gap-8 p-8 `}>
    //   <IoMdClose onClick={onClose} />
    //   <a href="#">Home</a>
    //   <a href="#">About</a>
    //   <a href="#">Contact</a>
    // </div>
    <button onClick={() => onAdd(number)}>Tambahkan</button>
  );
};

export default Sidebar;
