

export const DropDownList2 = ({
  options,
  title,
  name,
  value,
  onChange: change,
}) => {

  return (
    <select name={name} onChange={change} value={value} title={title}>
      {options.map(option => {
        return (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        );
      })}
    </select>
  )

};