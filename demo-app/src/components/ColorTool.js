import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';
import { useColorToolStoreContext } from '../contexts/colorToolStoreContext';


export const ColorTool = () => {

  const { colors, addColor } = useColorToolStoreContext();

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );

};
