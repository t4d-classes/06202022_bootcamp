import { useState } from 'react';

import { useCalcToolReduxStore } from '../hooks/useCalcToolReduxStore';

import { ToolHeader } from './ToolHeader';

export const CalcTool = () => {

  const { result, history, add, subtract, multiply, divide, clear } = useCalcToolReduxStore();

  const [numInput, setNumInput] = useState(0);

  const doClear = () => {
    setNumInput(0);
    clear();
  };

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
          <button type="button" onClick={() => multiply(numInput)}>Multiply</button>
          <button type="button" onClick={() => divide(numInput)}>Divide</button>
          <button type="button" onClick={doClear}>Clear</button>
        </fieldset>
      </form>
      <ul>
        {history.map(historyEntry => <li key={historyEntry.id}>
          {historyEntry.opName} {historyEntry.opValue}
        </li>)}
      </ul>
    </>
  );

};