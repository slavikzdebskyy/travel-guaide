import React from 'react';
import ReactDOM from 'react-dom';
import MapComponent from './map_component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MapComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
