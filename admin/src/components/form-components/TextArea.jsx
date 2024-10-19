const TextArea = ({ label, name, value, onChange, error, placeholder }) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
          {label}
        </label>
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows="6"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
      </div>
    );
  };
  
  export default TextArea;