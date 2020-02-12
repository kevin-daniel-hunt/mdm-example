import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Device from './Device';
import './Devices.scss';


function Devices(props) {
  const devices = props.devices.map((v) => <Device device={v} />);
  return (
    <div className="devices-container">
      {devices}
    </div>
  );
}

Devices.propTypes = {
  devices: PropTypes.array.isRequired,
};

export default Devices;