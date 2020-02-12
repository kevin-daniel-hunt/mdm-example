import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './DeviceView.scss';
import { useDispatch } from 'react-redux';
import { getSetting } from '../util/settings';
import { deviceType } from '../types';
import { healthColor } from '../util';

const NUM_SETTINGS = 10;

function DeviceView(props) {

  const dispatch = useDispatch();
  const healthClass = healthColor(props.device.health);


  const settings = [];
  // Complete dummy data, this is not saved or used in any way, just fun fluff
  for (let i = 0; i < NUM_SETTINGS; i+=2) {
    const setting1 = getSetting();
    const setting2 = getSetting();
    settings.push(
      <Row key={`${setting1}-${setting2}-${i}`}>
        <Col
          md="12"
          lg="6"
        >
          <Form.Check
            type="switch"
            id={`faux-setting-${i}`}
            label={(<span>{setting1}</span>)}
            title={setting1}
            defaultChecked={Math.random() < 0.5}
          />
        </Col>
        <Col
          md="12"
          lg="6"
        >
          <Form.Check
            type="switch"
            id={`faux-setting-${i + 1}`}
            label={(<span>{setting2}</span>)}
            title={setting2}
            defaultChecked={Math.random() < 0.5}
          />
        </Col>
      </Row>
    );
  }

  return (
    <div className="device-view-container">
      <Button
        className="d-inline-flex justify-content-center my-3"
        variant="secondary"
        onClick={() => dispatch({ type: 'RETURN' })}
      >
        <i className="material-icons">arrow_back_ios</i>
        Back
      </Button>
      <Card
        className="device-view-card py-3 px-5"
        bg="dark"
      >
        <Card.Title className="device-title">
          <i className="material-icons mr-2 align-bottom">{props.device.type === 'mac' ? 'desktop_mac' : 'phone_iphone'}</i> {props.device.name}
        </Card.Title>
        <Card.Subtitle className="text-muted mb-2">
          {props.device.version}
        </Card.Subtitle>
        <h5>
          Health: <span className={healthClass}>{props.device.health}</span>
        </h5>
        <Card.Subtitle className="my-3">
          Settings
        </Card.Subtitle>
        {settings}
      </Card>
    </div>
  );
}

DeviceView.propTypes = {
  device: deviceType,
};

export default DeviceView;