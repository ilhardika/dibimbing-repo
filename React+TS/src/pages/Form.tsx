import { useRef, useState } from "react";

function Form() {
  // uncontrolled component
  // useRef adalah select kepada elemen html, TS <> diisi dengan type yang diinginkan, dan defaultnya null
  const inputEmail = useRef<HTMLInputElement>(null);

  // controlled component
  const [inputUsername, setInputUsername] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");

  // state input validation
  const [usernameErrorMessage, setUsernameErrorMessage] = useState<string>("");
  const [passwordErrormessage, setPasswordErrormessage] = useState<string>("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Mencegah refresh halaman

    const emailValue = inputEmail.current?.value; // ambil value dari inputEmail, ? untuk optional chaining

    // validation
    const usernameValidation = inputUsername.length > 2;
    const passwordValidation = inputPassword.length > 3;

    if (usernameValidation) {
      setUsernameErrorMessage("Username harus lebih dari 2 karakter");
    }

    if (passwordValidation) {
      setPasswordErrormessage("Password harus lebih dari 3 karakter");
    }

    alert(
      `Form submitted with username: ${inputUsername}, password: ${inputPassword}, email: ${emailValue}`
    );
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          width: "300px",
        }}
      >
        <p>username : {inputUsername}</p>
        <p>password : {inputPassword}</p>

        <label htmlFor="username">User name</label>
        <input
          onChange={(e) => {
            // event = kejadian yang terjadi,
            // target = elemen yang di trigger event,
            // value = nilai dari elemen tersebut
            setInputUsername(e.target.value);

            // bisa langsung validasi ketika ketik
            const usernameValidation = e.target.value.length > 2;
            if (!usernameValidation) {
              setUsernameErrorMessage("Username harus lebih dari 2 karakter");
            } else {
              setUsernameErrorMessage("");
            }
          }}
          type="text"
          id="username"
          value={inputUsername} // value diambil dari state
        />
        <span>{usernameErrorMessage}</span>

        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => {
            setInputPassword(e.target.value);
          }}
          type="password"
          id="password"
          value={inputPassword}
        />
        <span>{passwordErrormessage}</span>

        <label htmlFor="email">Email</label>
        <input ref={inputEmail} type="text" id="email" />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
