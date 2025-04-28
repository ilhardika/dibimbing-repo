import { useFetchEmplyees } from "../api/useFetchEmplyees";
import { useCreateEmployees } from "../api/useCreateEmployees";
import { useState } from "react";
import { set } from "react-hook-form";

function Employees() {
  const [inputValue, setInputValue] = useState<string>("");

  const { employees, fetchLoading, fetchError, fetchEmployees } =
    useFetchEmplyees();

  const { createLoading, createError, handleCreateEmployee } =
    useCreateEmployees();

  const handleBtnCraeateEmployee = async () => {
    await handleCreateEmployee(inputValue);
    fetchEmployees();
    setInputValue(""); //reset inputValue
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
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {fetchLoading && <p>FetchLoading...</p>}
      {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
      {/* button disable ketika fetchLoading true */}
      <button disabled={fetchLoading} onClick={fetchEmployees}>
        Fecth Employees
      </button>
    </div>
  );
}

export default Employees;
