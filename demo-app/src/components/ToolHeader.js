import { memo } from 'react';

export const ToolHeader = memo((props) => {

  console.log('rendering tool header');

  return (
    <header>
      <h2>{props.headerText}</h2>
    </header>
  );
});