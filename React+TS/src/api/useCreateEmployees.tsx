import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export function useCreateEmployees() {
  const [createLoading, setCreateLoading] = useState<boolean>(false);
  const [createError, setCreateError] = useState<string>("");

  // menerima payload dari inputValue
  const handleCreateEmployee = async (payload: string) => {
    try {
      setCreateLoading(true); //toggle on

      await axiosInstance.post("/employees", { name: payload });
    } catch (error) {
      setCreateError("Create Error: " + (error as TypeError).message);
    } finally {
      setCreateLoading(false); //toggle off
    }
  };
  return {
    createLoading,
    createError,
    handleCreateEmployee,
  };
}
