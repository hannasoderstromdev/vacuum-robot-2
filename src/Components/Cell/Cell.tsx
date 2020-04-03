import React from 'react';

import './cell.css';

type CellProps = {
  id: string;
  isCleaned: boolean;
  children?: React.ReactNode;
};

function Cell({ id, isCleaned, children }: CellProps): JSX.Element {
  return (
    <li className={isCleaned ? 'cell cleaned' : 'cell not-cleaned'} data-testid={`cell-${id}`}>
      {children}
    </li>
  );
}

export default Cell;
