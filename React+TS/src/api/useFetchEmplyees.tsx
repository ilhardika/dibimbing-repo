import { useState } from "react";

type EmployeeSchema = {
  id: number;
  name: string;
  position: string;
  salary: number;
};

export function useFetchEmplyees() {
  const [employees, setEmployees] = useState<EmployeeSchema[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchEmployees = async () => {
    try {
      setLoading(true); //toggle on

      const req = await fetch("http://localhost:2000/employees", {
        method: "GET", //ganti method disini
      });
      // kasih tipe data dari emplyeeSchema[]
      const res = (await req.json()) as EmployeeSchema[];

      setEmployees(res);
    } catch (error) {
      // set error message dan pakai tipe data type error
      setError("Error fetching employees: " + (error as TypeError).message);
    } finally {
      setLoading(false); //toggle off
    }
  };

  return {
    employees,
    loading,
    error,
    fetchEmployees,
  };
}
