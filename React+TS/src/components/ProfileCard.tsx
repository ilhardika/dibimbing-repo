type ProfileCardProps = {
  name: string;
  age?: number; // ? adalah optional
};

function ProfileCard(props: ProfileCardProps) {
  // bisa juga didestructure, tidak pakai props. lagi di rendernya
  // plusnya, kita bisa kasih default value seperti pada age
  // const { name, age = 2000 } = props;

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "200px",
      }}
    >
      {/* kasih default value pakai || juga bisa kalau tanpa destructure */}
      <p>name: {props.name || "nama orang"}</p>

      {/*
      if ternary
      bisa pakai opsi 1 seperti opsi 1,
      null artinya tidak render 
      atau lebih singkatnya bisa pakai && seperti opsi 2, bacanya sama saja
      */}

      {/* {props.age ? <p>age : {props.age}</p> : null} */}
      {props.age && <p>age: {props.age}</p>}
    </div>
  );
}

export default ProfileCard;
