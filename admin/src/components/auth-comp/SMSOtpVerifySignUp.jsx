import React, { useState } from 'react';
import Input from '../form-components/Input';
import Button from '../form-components/Button';
import { useDispatch } from 'react-redux';
import { getSmsVerifyOTPAPI } from '../../helper/authAPI';

const SMSOtpVerifySignUp = ({companyEmail}) => {
    const [formData, setFormData] = useState({
      email: companyEmail,
    smsOTP: '',
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
    if (!formData.smsOTP) newErrors.smsOTP = 'SMS OTP is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('SMS OTP submitted:', formData);
      // Proceed with SMS OTP verification API call
      const isSuccess = await getSmsVerifyOTPAPI(dispatch, formData)
      setIsVerified(isSuccess)
    } else {
        console.log(validationErrors)
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center justify-center flex-col'>
      {/* <Input label="Email" error={errors.email} onChange={handleChange} name="email" value={formData.email} type="email" /> */}
      <div className='flex gap-2'>

      <Input label={<i className="ri-phone-line"></i>} error={errors.smsOTP} onChange={handleChange} name="smsOTP" value={formData.smsOTP} type="text" />
    { isVerified && <i className="ri-verified-badge-fill text-green-500 text-xl w-8"></i>}
      </div>
     {!isVerified && <Button type="submit">Verify</Button>}
    </form>
  );
};

export default SMSOtpVerifySignUp;
