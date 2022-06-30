

export const DropDownList = ({
  options,
  title,
  name,
  value,
  optionValueFn,
  optionTextFn,
  onChange: change,
}) => {

  return (
    <select name={name} onChange={change} value={value} title={title}>
      {options.map(option => {
        const optionValue = optionValueFn(option);
        return (
          <option key={optionValue} value={optionValue}>
            {optionTextFn(option)}
          </option>
        );
      })}
    </select>
  )

};