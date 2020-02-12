import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './DeviceView.scss';
import { useDispatch } from 'react-redux';
import { getSetting } from '../settings';

const NUM_SETTINGS = 10;

function DeviceView(props) {

  const dispatch = useDispatch();

  const settings = [];
  // Complete dummy data, this is not saved or used in any way, just fun fluff
  for (let i = 0; i < NUM_SETTINGS; i++) {
    const setting = getSetting();
    settings.push(
      <Form.Check
        type="switch"
        id={`faux-setting-${i}`}
        label={setting}
      />
    );
  }

  return (
    <div className="device-view-container">
      <Card
        className="device-view-card"
        bg="dark"
        onClick={() => dispatch({ type: 'SET', device: props.device })}
      >
        <Card.Title className="device-title">
          {props.device.name}
        </Card.Title>
        <Card.Title>
          <i className="material-icons">{props.device.type === 'mac' ? 'desktop_mac' : 'phone_iphone'}</i>
        </Card.Title>
        <Card.Body>
          {settings}
        </Card.Body>
      </Card>
    </div>
  );
}

DeviceView.propTypes = {
  device: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.oneOf(['mac', 'iphone']),
  }).isRequired,
};

export default DeviceView;