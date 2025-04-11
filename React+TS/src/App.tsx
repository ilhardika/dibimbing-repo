import Counter from "./components/Counter";
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
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px" }}>Komponen & Props</h1>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ marginBottom: "15px" }}>Daftar Pengajar</h2>

        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          {teachers.map((teacher, index) => (
            <ProfileCard name={teacher.name} age={teacher.age} key={index} />
          ))}
        </div>
      </div>

      <div>
      <h1 style={{ marginBottom: "20px" }}>Komponen & Props</h1>
        <h2>Counter</h2>
        <Counter />
      </div>
    </div>
  );
}

export default App;