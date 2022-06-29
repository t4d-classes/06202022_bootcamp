import { ToolHeader } from '../ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';
import { useColorToolReduxStore } from '../../hooks/useColorToolReduxStore';


export const ColorTool = () => {

  const { colors, addColor, deleteColor } = useColorToolReduxStore();

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} onDeleteColor={deleteColor} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );

};
