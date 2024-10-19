import React from 'react';

const Input = ({ label, name, type = 'text', value, onChange, placeholder, error, disabled = false, onKeyDown }) => {
    return (
      <div className="mb-4  w-full">
        <div className='flex shadow appearance-none border border-gray-300 rounded bg-gray-100 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline items-center gap-2 '>

        
        <label className="block text-xl text-gray-700 font-bold mb-2" htmlFor={name}>
          {label}
        </label>
        <input
          id={name}
          onKeyDown={onKeyDown}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className=" appearance-none rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        />
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
      </div>
    );
  };
export default Input;
