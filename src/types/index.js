import PropTypes from 'prop-types';
import { HEALTH, TYPE } from '../api';

export const deviceType = PropTypes.shape({
  name: PropTypes.string,
  version: PropTypes.string,
  type: PropTypes.oneOf(TYPE),
  health: PropTypes.oneOf(HEALTH),
}).isRequired;