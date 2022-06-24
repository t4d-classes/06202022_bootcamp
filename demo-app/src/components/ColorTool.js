import PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

import { useColorToolStore } from '../hooks/useColorToolStore';

export const ColorTool = () => {

  const { colors, addColor } = useColorToolStore();

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );

};
