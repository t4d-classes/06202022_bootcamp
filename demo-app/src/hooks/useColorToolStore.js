import { useList } from './useList';

const colorList = [
  { id: 1, name: 'red', hexcode: 'ff0000' },
  { id: 2, name: 'green', hexcode: '00ff00' },
  { id: 3, name: 'blue', hexcode: '0000ff' },
];

export const useColorToolStore = () => {

  const [ colors, addColor ] = useList(colorList);

  return {
    colors, addColor
  };

};