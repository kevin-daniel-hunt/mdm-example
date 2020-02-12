import React from 'react';
import Card from 'react-bootstrap/Card';
import './Device.scss';
import { deviceType } from '../types';
import { healthColor } from '../util';

import { useDispatch } from 'react-redux';


function Device(props) {

  const dispatch = useDispatch();
  const healthClass = healthColor(props.device.health);

  return (
    <Card
      className="device-card py-3 px-2"
      bg="dark"
      onClick={() => dispatch({ type: 'SET', device: props.device })}
    >
      <Card.Title className="device-title">
        <i className="material-icons mr-2 align-bottom">{props.device.type === 'mac' ? 'desktop_mac' : 'phone_iphone'}</i> {props.device.name}
      </Card.Title>
      <Card.Body className="py-2">
        Health: {<span className={healthClass}>{props.device.health}</span>}
      </Card.Body>
    </Card>
  );
}

Device.propTypes = {
  device: deviceType,
};

export default Device;