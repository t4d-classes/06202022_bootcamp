export const ColorList = ({ colors }) => {

  const colorListStyle = {listStyleType: 'disc', marginLeft: '1rem'};

  return (
    <ul style={colorListStyle}>
      {colors.map(color => {
        return (
          <li key={color.id}>{color.name}</li>
        );
      })}
    </ul>    
  );

};