const VariableInput = ({ variables, setVariables, error }) => {
    const handleVariableChange = (e, index) => {
      const newVariables = [...variables];
      newVariables[index] = e.target.value;
      setVariables(newVariables);
    };
  
    const addVariable = () => setVariables([...variables, ""]);
  
    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Variables</label>
        {variables.map((variable, index) => (
          <input
            key={index}
            type="text"
            value={variable}
            onChange={(e) => handleVariableChange(e, index)}
            placeholder="{{variable}}"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          />
        ))}
        <button
          type="button"
          onClick={addVariable}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Variable
        </button>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
      </div>
    );
  };
  
  export default VariableInput;
  