import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// deklarasi tipe data masing masing inputan
// tapi daripada pakai ts murni mending pakai z infer
// type RegisterFormSchema = {
//   username: string;
//   password: string;
// };

// deklarasi validasi pakai zod object
// setiap parameter merepresentasikan inputan yang ada di form
const registerFormSchema = z.object({
  // tipedata, kondisi, message
  username: z.string().min(3, { message: "minimal 3 karakter" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" }),
  // pakai coerce untuk mengubah tipe data dari string ke number
  // kalai number = value kalau string = panjang
  age: z.coerce.number().min(18, { message: "minimal 18 tahun" }),
});

// infer dari zod object ke ts
type RegisterFormSchema = z.infer<typeof registerFormSchema>;

function RHF() {
  // berikan type yang sudah di deklarasi
  const form = useForm<RegisterFormSchema>(
    // apply zod resolber validatior dan tempelkan validasi dari registerFormSchema
    { resolver: zodResolver(registerFormSchema) }
  );

  // values ini adalah passing dari form.handleSubmit,
  // berikan type yang sudah di deklarasi
  const handleRegister = (values: RegisterFormSchema) => {
    alert("Registered");
    console.log(values);
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h1>React Hook Form</h1>
      <form
        // ketika di submit memanggil rhf handle submit yang memangggil function handleRegister
        // form handleSubmit akan mengirim values ke handleRegister
        onSubmit={form.handleSubmit(handleRegister)}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <label>
          {/* tinggal spread aja pakai {} dan panggil misal "register" dan tambahin id misal "username" 
          tidak perlu menambahkan id karna ada di dalama <label> */}
          Username <input type="text" {...form.register("username")} />
        </label>
        <span>{form.formState.errors.username?.message}</span>

        <label>
          Password{" "}
          <input
            type={showPassword ? "text" : "password"}
            {...form.register("password")}
          />
        </label>
        <span>{form.formState.errors.password?.message}</span>
        <label>
          Show Password
          <input
            type="checkbox"
            onChange={(e) => setShowPassword(e.target.checked)}
            checked={showPassword}
          />
        </label>

        <label>
          Email <input type="email" {...form.register("email")} />
        </label>
        <span>{form.formState.errors.email?.message}</span>

        <label>
          Age <input type="number" {...form.register("age")} />
        </label>
        <span>{form.formState.errors.age?.message}</span>

        {/* selama ada di alaman <form> tidak perlu tambahkan type submit */}
        <button>Register</button>
      </form>
    </div>
  );
}

export default RHF;
