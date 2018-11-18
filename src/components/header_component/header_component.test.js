import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './header_component.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
