import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export function useDeleteEmployee() {
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
  const [deleteError, setDeleteError] = useState<string>("");

  const handleDeleteEmployee = async (id: string) => {
    try {
      setDeleteLoading(true); //toggle on

      await axiosInstance.delete(`/employees/${id}`);
    } catch (error) {
      setDeleteError("Delete Error: " + (error as TypeError).message);
    } finally {
      setDeleteLoading(false); //toggle off
    }
  };
  return {
    deleteLoading,
    deleteError,
    handleDeleteEmployee,
  };
}
