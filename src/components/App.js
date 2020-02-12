
import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as API from '../api';
import LoadPrompt from './LoadPrompt';
import Devices from './Devices';
import DeviceView from './DeviceView';
import './App.scss';

function App() {

  const [devices, setDevices] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const dispatch = useDispatch();
  const selectedDevice = useSelector(state => state);
  // yes I am using both a rudimentary redux store AND root level state.  
  // this is only for example purposes, this approach is a bit ugly obviously

  const fetchData = async () => {
    let response;
    setIsFetching(true);
    dispatch({ type: 'RETURN' });
    setDevices([]);
    try {
      response = await API.fetchMachines();
      setDevices(response);
    } catch (err) {
      console.error('Something went wrong: ', err);
    }
    setIsFetching(false);
  };
  useEffect(() => {
    // do something on mount and willunmount (if returned func)
    // I am not using this actually, I am forcing the first refresh by user interaction for
    // example purposes, but this is an interesting concept I want to keep documented.
    // (the [] in teh second argument means only do this once (and cleanup if provided, neat hack))
    // OK maybe not a hack if its provided in the official docs ;)
  }, []);


  // this is a quick concept, this would likely be made better with a router or something more robust
  let mainScreen;
  if (selectedDevice) {
    mainScreen = <DeviceView device={selectedDevice} />
  } else if (devices.length) {
    mainScreen = <Devices devices={devices} />
  } else {
    mainScreen = <LoadPrompt clickHandler={fetchData} isFetching={isFetching} />;
  }

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>MDMmmm</Navbar.Brand>
        <Nav className="ml-auto mr-4">
          <NavDropdown title="FancyUsername">
            <NavDropdown.Item>
              TODO: Add auth?
            </NavDropdown.Item>
            <NavDropdown.Item onClick={fetchData}>
              Reload Devices
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      {mainScreen}
    </div>
  );
}

export default App;
