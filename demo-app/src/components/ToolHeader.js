import { memo } from 'react';

export const ToolHeader = memo((props) => {

  return (
    <header>
      <h2>{props.headerText}</h2>
    </header>
  );
});