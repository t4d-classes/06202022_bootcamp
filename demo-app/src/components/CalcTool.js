import { useState } from 'react';

import { ToolHeader } from './ToolHeader';

export const CalcTool = () => {

  const [numInput, setNumInput] = useState(0);

  return (
    <>
      <ToolHeader headerText="Calc Tool" />
      <form>
        <div>Result: {0}</div>
        <label>
          Num: <input type="number" value={numInput}
            onChange={e => setNumInput(e.target.valueAsNumber)} />
        </label>
        <fieldset>
          <button type="button" onClick={() => null}>Add</button>
          <button type="button" onClick={() => null}>Subtract</button>
        </fieldset>
      </form>
    </>
  );

};