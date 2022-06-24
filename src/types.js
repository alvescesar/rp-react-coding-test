import PropTypes from 'prop-types';

// Cards are strings which should match /^[2-9TJQKA][hcds]$/
const cardRegex = /^[2-9TJQKA][hcds]$/;
export const cardType = cardRegex.test('') ? PropTypes.instanceOf(RegExp) : PropTypes.string;

export const playerShape = PropTypes.shape({
  seatId: PropTypes.number.isRequired,
  bet: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(cardType).isRequired,
});

export const seatProps = {
  id: PropTypes.number.isRequired,
  state: PropTypes.oneOf(['available', 'occupied']).isRequired,
  username: PropTypes.string,
  chips: PropTypes.number,
};
export const seatShape = PropTypes.shape(seatProps);

export const potShape = PropTypes.shape({
  chips: PropTypes.number.isRequired,
  seatIds: PropTypes.arrayOf(PropTypes.number).isRequired,
});

export const handShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  communityCards: PropTypes.arrayOf(cardType).isRequired,
  players: PropTypes.arrayOf(playerShape).isRequired,
  pots: PropTypes.arrayOf(potShape).isRequired,
});

export const tableShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  state: PropTypes.oneOf(['open', 'closed']).isRequired,
  game: PropTypes.oneOf(['holdem', 'omaha', 'royal']).isRequired,
  blinds: PropTypes.shape({
    small: PropTypes.number.isRequired,
    big: PropTypes.number.isRequired,
  }).isRequired,
  seats: PropTypes.arrayOf(seatShape).isRequired,
  currentHand: handShape
});
