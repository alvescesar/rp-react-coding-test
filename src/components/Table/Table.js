import React from 'react';
import cx from 'classnames';
import { tableShape } from '../../types';

import Seats from '../Seats';
import Cards from '../Cards';
import Pots from '../Pots';

import './Table.css';

const Table = ({ table }) => {
  const isOmaha = table.game === 'omaha';

  // https://www.npmjs.com/package/classnames - consulted arguments to determine class usage
  const classPerNumberOfCards = cx('Table', {
    'Four-cards': isOmaha,
    'Two-cards': !isOmaha
  });

  return (
    <div className={classPerNumberOfCards}>
    {table.currentHand &&
        <div>
          <Seats seats={table.seats} players={table.currentHand.players} />
          <Cards values={table.currentHand.communityCards} />
          <Pots pots={table.currentHand.pots} />
        </div>
      }
    </div>
  );
};

Table.propTypes = {
  table: tableShape.isRequired,
};

export default Table;
