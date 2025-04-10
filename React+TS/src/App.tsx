import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {/* string tidak butuh {}, selain string butuh {} */}
      <ProfileCard name="ilham" year={2000} />
      {/* bisa tidak pakai year karna optional */}
      <ProfileCard name="dika" />
    </div>
  );
}

export default App;
