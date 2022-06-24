import { useState } from 'react';

import { useCalcToolReduxStore } from '../hooks/useCalcToolReduxStore';

import { ToolHeader } from './ToolHeader';

export const CalcTool = () => {

  const { result, add, subtract } = useCalcToolReduxStore();

  const [numInput, setNumInput] = useState(0);

  return (
    <>
      <ToolHeader headerText="Calc Tool" />
      <form>
        <div>Result: {result}</div>
        <label>
          Num: <input type="number" value={numInput}
            onChange={e => setNumInput(e.target.valueAsNumber)} />
        </label>
        <fieldset>
          <button type="button" onClick={() => add(numInput)}>Add</button>
          <button type="button" onClick={() => subtract(numInput)}>Subtract</button>
        </fieldset>
      </form>
    </>
  );

};