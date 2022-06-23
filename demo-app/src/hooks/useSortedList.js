import { useState } from 'react';

import { useList } from "./useList";

const SORT_DIR_ASC = 'asc';
const SORT_DIR_DESC = 'desc';

const sortTheItems = (items, sortCol, sortDir) => {

  return [...items].sort((a,b) => {
    if (a[sortCol] < b[sortCol]) {
      return sortDir === SORT_DIR_ASC ? -1 : 1
    } else if (a[sortCol] > b[sortCol]) {
      return sortDir === SORT_DIR_ASC ? 1 : -1
    } else {
      return 0;
    }
  });
};

export const useSortedList = (initialList) => {

  const [
    items, appendItem,
    replaceItem, removeItem,
  
  ] = useList(initialList);

  const [ sortCol, setSortCol ] = useState('id');
  const [ sortDir, setSortDir ] = useState(SORT_DIR_ASC);

  const sortItems = (colName) => {
    if (colName === sortCol) {
      setSortDir(sortDir === SORT_DIR_ASC ? SORT_DIR_DESC : SORT_DIR_ASC);
    } else {
      setSortCol(colName);
      setSortDir(SORT_DIR_ASC);
    }
  };  


  return [
    sortTheItems(items, sortCol, sortDir), sortCol, sortDir,
    appendItem, replaceItem, removeItem, sortItems,
  ];

};
