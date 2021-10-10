import { useEffect, useState } from 'react';

import EmployeeService from '../services/EmployeeService';

const CreateOrUpdateEmployee = ({ match, history }) => {
  const isUpdate = !!match.params.id;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
  });

  useEffect(() => {
    const populateForm = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(match.params.id);
        const { id, ...employee } = response.data;
        setFormData(employee);
      } catch (err) {
        console.error('Error fetching employee by id: ' + err);
      }
    };

    if (isUpdate) {
      populateForm();
    }
  }, [isUpdate, match.params.id]);

  const { firstName, lastName, emailId } = formData;

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (isUpdate) {
      EmployeeService.updateEmployee(match.params.id, formData)
        .then(() => history.push('/'))
        .catch(err => console.error('Error updating employee: ' + err));
    } else {
      EmployeeService.saveEmployee(formData)
        .then(() => history.push('/'))
        .catch(err => console.error('Error creating employee: ' + err));
    }
  };

  const handleCancel = () => {
    history.goBack();
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3'>
          <h3 className='text-center'>{isUpdate ? 'Update' : 'Add'} Employee</h3>
          <div className='card-body'>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label>First Name: </label>
                <input
                  type='text'
                  name='firstName'
                  value={firstName}
                  onChange={handleChange}
                  className='form-control'
                  placeholder='First Name'
                  required
                />
              </div>
              <div className='form-group'>
                <label>Last Name: </label>
                <input
                  type='text'
                  name='lastName'
                  value={lastName}
                  onChange={handleChange}
                  className='form-control'
                  placeholder='Last Name'
                  required
                />
              </div>
              <div className='form-group'>
                <label>Email Address: </label>
                <input
                  type='email'
                  name='emailId'
                  value={emailId}
                  onChange={handleChange}
                  className='form-control'
                  placeholder='Email Address'
                  required
                />
              </div>
              <button
                type='submit'
                className='btn btn-success'
                style={{ marginRight: 10 }}>
                {isUpdate ? 'Update' : 'Save'}
              </button>
              <button type='button' className='btn btn-danger' onClick={handleCancel}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrUpdateEmployee;
