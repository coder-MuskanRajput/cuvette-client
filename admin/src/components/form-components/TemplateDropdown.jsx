import React from 'react'

const TemplateDropdown = ({ label, options, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <select
        onChange={e => onChange(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value={''}  >Select templates</option>
        {options.map((option) => {
            return(
          <option key={option._id} value={option._id}>{option.name}</option>
        )})}
      </select>
    </div>
  );
};

export default TemplateDropdown;
