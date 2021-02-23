import PropTypes from "prop-types";

//functional component
const Input = ({ label, id, handler, value }) => {
  const handleChange = (event) => {
    handler(event);
  };
  return (
    <div className="bg-indigo-400 bg-center border-8 border-indigo-400 rounded-lg  ">
      <label className="text-indigo-800">{label}</label>
      <input
        className=" border-2 rounded-lg border-indigo-500"
        placeholder={label}
        id={id}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

Input.propTypes = {
  handler: PropTypes.func,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
};

export default Input;
