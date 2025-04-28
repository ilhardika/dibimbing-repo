import { useFetchEmplyees } from "../api/useFetchEmplyees";

function Employees() {
  const { employees, loading, error, fetchEmployees } = useFetchEmplyees();

  return (
    <div>
      <h1>Employees</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* button disable ketika loading true */}
      <button disabled={loading} onClick={fetchEmployees}>
        Fecth Employees
      </button>
    </div>
  );
}

export default Employees;
