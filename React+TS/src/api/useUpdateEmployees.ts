import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export function useUpdateEmployees() {
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);
  const [updateError, setUpdateError] = useState<string>("");

  // menerima payload dari inputValue
  const handleUpdateEmployee = async (employeeId: string, payload: string) => {
    try {
      setUpdateLoading(true); //toggle on

      // PATCH = mengganti beberapa data dari object
      // PUT = mengganti semua data dari object
      await axiosInstance.patch(`/employees/${employeeId}`, { name: payload });
    } catch (error) {
      setUpdateError("Update Error: " + (error as TypeError).message);
    } finally {
      setUpdateLoading(false); //toggle off
    }
  };
  return {
    updateLoading,
    updateError,
    handleUpdateEmployee,
  };
}
