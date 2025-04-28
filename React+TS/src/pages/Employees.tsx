import { axiosInstance } from "../lib/axios";
import { useFetchEmplyees } from "../api/useFetchEmplyees";
import { useCreateEmployees } from "../api/useCreateEmployees";
import { useDeleteEmployee } from "../api/useDeleteEmployee";
import { useUpdateEmployees } from "../api/useUpdateEmployees";
import { useState } from "react";
import { set } from "react-hook-form";

function Employees() {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedEmployee, setSelectedEmployee] = useState<string>("");
  const [updateEmployeeText, setUpdateEmployeeText] = useState<string>("");

  const { employees, fetchLoading, fetchError, handleFetchEmployees } =
    useFetchEmplyees();

  const { createLoading, createError, handleCreateEmployee } =
    useCreateEmployees();

  const { deleteLoading, deleteError, handleDeleteEmployee } =
    useDeleteEmployee();

  const { updateLoading, updateError, handleUpdateEmployee } =
    useUpdateEmployees();

  const handleBtnCraeateEmployee = async () => {
    await handleCreateEmployee(inputValue);
    handleFetchEmployees();
    setInputValue(""); //reset inputValue
  };

  const handleBtnDeleteEmployee = async (id: string) => {
    await handleDeleteEmployee(id);
    handleFetchEmployees();
  };

  const handleBtnUpdateEmployee = async () => {
    await handleUpdateEmployee(selectedEmployee, updateEmployeeText);
    handleFetchEmployees();
    setUpdateEmployeeText(""); //reset inputValue
    setSelectedEmployee(""); //reset selectedEmployee
  };

  return (
    <div>
      <h1>Employees</h1>
      <label htmlFor="">
        Input Employee
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          value={inputValue}
        />
      </label>
      {createLoading && <p>Creating Employee...</p>}
      {createError && <p style={{ color: "red" }}>{createError}</p>}
      {/* menerima parameter payload string yaitu inputValue */}
      <button onClick={handleBtnCraeateEmployee}>Add Employee</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.salary}</td>
              <td>
                {/* EDIT */}
                <div>
                  <input
                    type="radio"
                    name="employee-edit"
                    onChange={() => setSelectedEmployee(employee.id)}
                    checked={selectedEmployee === employee.id}
                  />
                </div>

                {/* DELETE */}
                <div>
                  {deleteLoading && <p>Deleting Employee...</p>}
                  {deleteError && <p style={{ color: "red" }}>{deleteError}</p>}
                  <button onClick={() => handleBtnDeleteEmployee(employee.id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {fetchLoading && <p>FetchLoading...</p>}
      {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
      {/* button disable ketika fetchLoading true */}
      <button disabled={fetchLoading} onClick={handleFetchEmployees}>
        Fecth Employees
      </button>

      <br />
      {/* selected employee id */}
      <p>
        selected emplyee id: <strong>{selectedEmployee}</strong>
      </p>
      <label>
        Update Employee Name
        <input
          type="text"
          onChange={(e) => setUpdateEmployeeText(e.target.value)}
          value={updateEmployeeText}
        />
      </label>

      {updateLoading && <p>Updating Employee...</p>}
      {updateError && <p style={{ color: "red" }}>{updateError}</p>}
      <button onClick={() => handleBtnUpdateEmployee()}>Submit Update</button>
    </div>
  );
}

export default Employees;
