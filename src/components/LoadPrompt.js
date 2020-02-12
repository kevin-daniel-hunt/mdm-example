import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import React from 'react';
import PropTypes from 'prop-types';

function LoadPrompt(props) {
  return (
    <div className="load-prompt-container mt-5 text-center">
      <h4>
        Welcome to the <code className="ml-1">MDMmmm DASHBOARD</code>.<br/>
        Please load your devices...
      </h4>
      <Button
        className="mb-3"
        disabled={props.isFetching}
        onClick={props.clickHandler}
      >
        Load Devices
      </Button>
      <br />
      { props.isFetching &&
        <Spinner
          animation="border"
        />
      }
    </div>
  );
}

LoadPrompt.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default LoadPrompt;