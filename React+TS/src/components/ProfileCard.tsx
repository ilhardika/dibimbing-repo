type ProfileCardProps = {
    name: string;
    age?: number; // ? adalah optional
  };
  
  function ProfileCard(props: ProfileCardProps) {
    return (
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "4px",
          padding: "15px",
          width: "200px",
          backgroundColor: "white",
        }}
      >
        <h3 style={{ margin: "0 0 10px 0" }}>
          {props.name || "nama orang"}
        </h3>
  
        {props.age && (
          <p style={{ 
            margin: "0",
            color: "#555",
            fontSize: "14px",
          }}>
            Usia: {props.age}
          </p>
        )}
      </div>
    );
  }
  
  export default ProfileCard;