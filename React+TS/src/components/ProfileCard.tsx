type ProfileCardProps = {
  name: string;
  age?: number; // ? adalah optional
};

function ProfileCard(props: ProfileCardProps) {
  return (
    <div
      style={{
        border: "none",
        borderRadius: "8px",
        padding: "16px",
        width: "220px",
        backgroundColor: "#f8f9fa",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h3
        style={{
          margin: "0 0 8px 0",
          color: "#333",
          fontSize: "18px",
        }}
      >
        {props.name || "nama orang"}
      </h3>

      {props.age && (
        <p
          style={{
            margin: "0",
            color: "#666",
            fontSize: "14px",
            backgroundColor: "#e9ecef",
            padding: "4px 8px",
            borderRadius: "4px",
            display: "inline-block",
          }}
        >
          Usia: {props.age}
        </p>
      )}
    </div>
  );
}

export default ProfileCard;
