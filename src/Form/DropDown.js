import Select from "react-select";

const DropDown = ({
  isMulti = true,
  value,
  options,
  onChange,
  placeholder,
}) => {
  return (
    <div className="dropdown-wrapper">
      <Select
        options={options}
        isMulti={isMulti}
        value={Array.isArray(value) && value.length ? value : null}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default DropDown;
