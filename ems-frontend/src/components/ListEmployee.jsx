import { useEffect, useState } from 'react';

import EmployeeService from '../services/EmployeeService';

const ListEmployee = ({ history }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployees().then(res => {
      setEmployees(res.data);
    });
  }, []);

  const handleEditEmployee = id => {
    history.push(`/update-employee/${id}`);
  };

  return (
    <div>
      <h2 className='text-center'>Employees List</h2>
      <div className='row'>
        <button className='btn btn-primary' onClick={() => history.push('/add-employee')}>
          Add Employee
        </button>
      </div>
      <br />
      <br />
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
            {employees.map(({ id, firstName, lastName, emailId }) => (
              <tr key={id}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{emailId}</td>
                <td>
                  <button className='btn btn-info' onClick={() => handleEditEmployee(id)}>
                    Update
                  </button>
                  <button
                    className='btn btn-danger'
                    style={{ marginLeft: 10 }}
                    onClick={() => {}}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployee;
