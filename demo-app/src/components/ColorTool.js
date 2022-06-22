import PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';

export const ColorTool = (props) => {

  const colorListStyle = {listStyleType: 'disc', marginLeft: '1rem'}; 

  return (
    <>
      <ToolHeader headerText="Color Tool" />
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