import { useEffect, useState } from 'react';

import EmployeeService from '../services/EmployeeService';

const ViewEmployee = ({ match }) => {
  const [id] = useState(match.params.id);
  const [employee, setEmployee] = useState();

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then(res => setEmployee(res.data))
      .catch(err => console.error('Error fetching employee by id: ', err));
  }, [id]);

  return !employee ? null : (
    <div className='card col-md-6 offset-md-3'>
      <h3 className='text-center'>View Employee Details</h3>
      <div className='card-body'>
        <div className='row'>
          <label>First Name: </label>
          <div>{employee.firstName}</div>
        </div>
        <div className='row'>
          <label>Last Name: </label>
          <div>{employee.lastName}</div>
        </div>
        <div className='row'>
          <label>Email ID: </label>
          <div>{employee.emailId}</div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
