import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import './Device.scss';

import { useDispatch } from 'react-redux';


function Device(props) {

  const dispatch = useDispatch();

  return (
    <Card
      className="device-card"
      bg="dark"
      onClick={() => dispatch({ type: 'SET', device: props.device })}
    >
      <Card.Title className="device-title">
        {props.device.name}
      </Card.Title>
      <Card.Title>
        <i className="material-icons">{props.device.type === 'mac' ? 'desktop_mac' : 'phone_iphone'}</i>
      </Card.Title>
    </Card>
  );
}

Device.propTypes = {
  device: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.oneOf(['mac', 'iphone']),
  }).isRequired,
};

export default Device;