import { useState } from "react";
import { axiosInstance } from "../lib/axios";

type EmployeeSchema = {
  id: string;
  name: string;
  position: string;
  salary: number;
};

export function useFetchEmplyees() {
  const [employees, setEmployees] = useState<EmployeeSchema[]>([]);
  const [fetchLoading, setFetchLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<string>("");

  const handleFetchEmployees = async () => {
    try {
      setFetchLoading(true); //toggle on

      //   const req = await fetch("http://localhost:2000/employees", {
      //     method: "GET", //ganti method disini
      //   });
      //   // kasih tipe data dari emplyeeSchema[]
      //   const res = (await req.json()) as EmployeeSchema[];

      const res = await axiosInstance.get<EmployeeSchema[]>("/employees");

      setEmployees(res.data);
    } catch (fetchError) {
      // set fetchError message dan pakai tipe data typeError
      setFetchError(
        "FetchError fetching employees: " + (fetchError as TypeError).message
      );
    } finally {
      setFetchLoading(false); //toggle off
    }
  };

  return {
    employees,
    fetchLoading,
    fetchError,
    handleFetchEmployees,
  };
}
