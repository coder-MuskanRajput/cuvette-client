import React, { useState } from 'react';
import Input from '../components/form-components/Input';
import Button from '../components/form-components/Button';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import TextArea from '../components/form-components/TextArea';
import Dropdown from '../components/form-components/Dropdown';
import { postJob } from '../helper/authAPI';
import { useNavigate } from 'react-router-dom';

const InterviewForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    experienceLevel: 'Fresher',
    candidates: [],
    endDate: '',
  });
  const [emailInput, setEmailInput] = useState(''); // State to handle email input

  const experienceOptions = [
    { value: 'Fresher', label: 'Fresher' },
    { value: 'Mid-Level', label: 'Mid-Level' },
    { value: 'Senior-Level', label: 'Senior-Level' },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEmailInput = (e) => {
    setEmailInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
      const trimmedValue = emailInput.trim();
      if (/\S+@\S+\.\S+/.test(trimmedValue)) {
        setFormData(prev => ({
          ...prev,
          candidates: [...prev.candidates, trimmedValue]
        }));
        setEmailInput('');
      } else {
        toast.error('Invalid email format'); // Provide feedback if email is not valid
      }
    }
  };

  const handleRemoveCandidate = (candidateToRemove) => {
    setFormData(prev => ({
      ...prev,
      candidates: prev.candidates.filter(candidate => candidate !== candidateToRemove)
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.experienceLevel) newErrors.experienceLevel = 'Experience level is required';
    if (!formData.candidates.length) newErrors.candidates = 'At least one candidate is required';
    else if (!formData.candidates.every(email => /\S+@\S+\.\S+/.test(email))) {
      newErrors.candidates = 'One or more emails are invalid';
    }
    if (!formData.endDate) newErrors.endDate = 'End date is required';
    else if (new Date(formData.endDate) < new Date()) {
      newErrors.endDate = 'End date cannot be in the past';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Interview data submitted:', formData);
      const isSuccess = postJob(dispatch, formData)
      // Simulated API call
      if (isSuccess) {
          toast.success('Form submitted successfully');
      }
      navigate('/')
    } else {
      toast.error('Validation errors, please review the form');
    }
  };

  return (
    <form className='px-10 py-10 rounded-md border border-blue-400 shadow-md flex flex-col items-center justify-between gap-2 max-w-lg min-w-[320px]' onSubmit={handleSubmit}>
      <p className='text-3xl font-bold'>Schedule Interview</p>
      <div>
        <div className='block'>Job Title</div>
        <Input label="" error={formData.errors?.title} onChange={handleChange} name="title" placeholder="Job Title" value={formData.title} type="text" />
      </div>
      <div>
        <div className='block'>Description</div>
        <TextArea label="" error={formData.errors?.description} onChange={handleChange} name="description" placeholder="Job Description" value={formData.description} type="text" />
      </div>
      <div>
        <div className='block'>Experience Level</div>
        <Dropdown options={experienceOptions} onChange={(e) => handleChange({target: {name: 'experienceLevel', value: e.value}})} value={formData.experienceLevel} />
      </div>
      <div>
        <div className='block'>Candidates</div>
        <Input label="" error={formData.errors?.candidates} onKeyDown={handleKeyDown} onChange={handleEmailInput} name="candidates" placeholder="Type an email and press space" value={emailInput} type="text" />
        <div className="mt-2">
          {formData.candidates.map((email, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="bg-gray-200 rounded-full px-2 py-1">{email} <button type="button" onClick={() => handleRemoveCandidate(email)} className="text-red-500 hover:text-red-700"> <i className='ri-close-line'></i> </button> </span>
              
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className='block'>End Date</div>
        <Input label="" error={formData.errors?.endDate} onChange={handleChange} name="endDate" placeholder="End Date" value={formData.endDate} type="date" />
      </div>
      <Button type="submit">Schedule Interview</Button>
    </form>
  );
};

export default InterviewForm;
