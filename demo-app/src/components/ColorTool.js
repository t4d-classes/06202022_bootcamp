import PropTypes from 'prop-types';

export const ColorTool = (props) => {

  const colorListStyle = {listStyleType: 'disc', marginLeft: '1rem'}; 

  return (
    <>
      <header>
        <h2>{props.headerText}</h2>
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
  headerText: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
};