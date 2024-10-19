import React from 'react';

const Dropdown = ({ label, options, onChange, value }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <select
        value={value}  // Set the selected value here
        onChange={e => onChange(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        {options.map((option, idx) => (
          <option key={idx} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
