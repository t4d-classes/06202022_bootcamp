import PropTypes from 'prop-types';

export const ColorTool = (props) => {

  const colorListStyle = {listStyleType: 'disc', marginLeft: '1rem'}; 

  return (
    <>
      <header>
        <h2>Color Tool</h2>
      </header>
      <ul style={colorListStyle}>
        {props.colors.map(color => {
          return (
            <li key={color.id}>{color.name}</li>
          );
        })}
      </ul>
    </>
  );

};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: PropTypes.array.isRequired,
};