export const ColorTool = () => {

  const colors = [
    { id: 1, name: 'red', hexcode: 'ff0000' },
    { id: 2, name: 'green', hexcode: '00ff00' },
    { id: 3, name: 'blue', hexcode: '0000ff' },
  ];

  const colorListStyle = {listStyleType: 'disc', marginLeft: '1rem'}; 

  return (
    <>
      <header>
        <h2>Color Tool</h2>
      </header>
      <ul style={colorListStyle}>
        {colors.map(color => {
          return (
            <li key={color.id}>{color.name}</li>
          );
        })}
      </ul>
    </>
  );


};