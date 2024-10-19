import React, { useState } from 'react';
import Input from '../form-components/Input';
import Button from '../form-components/Button';
import { getEmailVerifyOTPAPI } from '../../helper/authAPI';
import { useDispatch } from 'react-redux';

const EmailOtpVerifySignUp = ({companyEmail}) => {
  const [formData, setFormData] = useState({
    email: companyEmail,
    emailOTP: '',
  });

  const [errors, setErrors] = useState({});
  const [isVerified, setIsVerified] = useState(false)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    // if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.emailOTP) newErrors.emailOTP = 'Email OTP is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Email OTP submitted:', formData);
      // Proceed with email OTP verification API call
      const isSuccess = await getEmailVerifyOTPAPI(dispatch, formData);
      setIsVerified(isSuccess);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center justify-center flex-col'>
      {/* <Input label="Email" error={errors.email} onChange={handleChange} name="email" value={formData.email} type="email" /> */}
      <div className='flex gap-2'>

      <Input label={<i className="ri-mail-line"></i>} error={errors.emailOTP} onChange={handleChange} name="emailOTP" value={formData.emailOTP} type="text" />
    { isVerified && <i className="ri-verified-badge-fill text-green-500 text-xl w-8"></i>}
      </div>
     {!isVerified && <Button type="submit">Verify</Button>}
    </form>
  );
};

export default EmailOtpVerifySignUp;
