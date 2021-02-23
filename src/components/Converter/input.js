import PropTypes from "prop-types";

//functional component
const Input = ({ label, id, handler, value }) => {
  const handleChange = (event) => {
    handler(event);
  };
  return (
    <div>
      <label>{label}</label>
      <input
        className=""
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
