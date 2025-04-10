import ProfileCard from "./components/ProfileCard";

type Teacher = {
  name: string;
  age?: number;
};

const teachers: Teacher[] = [
  {
    name: "dosen 1",
  },
  {
    name: "dosen 2",
    age: 25,
  },
];

function App() {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#333",
          marginBottom: "20px",
          borderBottom: "2px solid #ddd",
          paddingBottom: "10px",
        }}
      >
        Daftar Dosen
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {teachers.map((teacher, index) => (
          <ProfileCard name={teacher.name} age={teacher.age} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
