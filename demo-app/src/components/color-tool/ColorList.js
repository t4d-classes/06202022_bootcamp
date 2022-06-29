export const ColorList = ({ colors, onDeleteColor: deleteColor }) => {

  const colorListStyle = {listStyleType: 'disc', marginLeft: '1rem'};

  return (
    <ul style={colorListStyle}>
      {colors.map(color => {
        return (
          <li key={color.id}>
            {color.name}
            <button type="button" onClick={() => deleteColor(color.id)}>X</button>
          </li>
        );
      })}
    </ul>    
  );

};