import { useEffect, useState } from 'react';

import EmployeeService from '../services/EmployeeService';

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployees().then(res => {
      setEmployees(res.data);
    });
  }, []);

  return (
    <div>
      <h2 className='text-center'>Employees List</h2>
      <div className='row'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployee;
