

import React, { useState } from 'react';
import Input from '../form-components/Input';
import Button from '../form-components/Button';
import { getUserRegisterAPI } from '../../helper/authAPI';
import { useDispatch } from 'react-redux';
import {toast} from 'react-toastify'

const RegistrationForm = ({setPages, setCompanyEmail}) => {
  const [formData, setFormData] = useState({
    companyEmail: '',
    name: '',
    companyName: '',
    mobileNumber: '',
    employeeSize: '',
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'companyEmail') {
      setCompanyEmail(value)
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.companyEmail) newErrors.companyEmail = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.companyEmail)) {
      newErrors.companyEmail = 'Email is invalid';
    }
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.mobileNumber) newErrors.mobileNumber = 'Mobile number is required';
    if (!formData.employeeSize) newErrors.employeeSize = 'Employee size is required';
    return newErrors;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Registration data submitted:', formData);
     const data =  await getUserRegisterAPI(dispatch, formData, toast)
     toast.success(data.mobileOtp)
     if (data) {
       setPages('signup-otp')
     }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form
    className='px-10 py-10 rounded-md border border-blue-400 shadow-md flex flex-col items-center justify-between gap-2 max-w-lg'
    onSubmit={handleSubmit}
  >
    <p className='text-3xl font-bold'>Sign Up</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
      <Input label={<i className='ri-user-line'></i>} error={errors.name} onChange={handleChange} name="name" placeholder={'name'} value={formData.name} type="text" />
      <Input label={<i className='ri-mail-line'></i>}  error={errors.companyEmail} onChange={handleChange} name="companyEmail" placeholder="company Email" value={formData.companyEmail} type="email" />
      <Input label={<i className='ri-user-line'></i>}  error={errors.companyName} onChange={handleChange} name="companyName" placeholder="company Name" value={formData.companyName} type="text" />
      <Input label={<i className='ri-phone-line'></i>}  error={errors.mobileNumber} onChange={handleChange} name="mobileNumber" placeholder="mobile Number" value={formData.mobileNumber} type="tel" />
      <Input label={<i className="ri-group-line"></i>}  error={errors.employeeSize} onChange={handleChange} name="employeeSize" placeholder="employee Size" value={formData.employeeSize} type="number" />
      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegistrationForm;
