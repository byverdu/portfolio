import React from 'react';
import App from '../components/container';
import { shallow } from 'enzyme';

it( 'renders without crashing', () => {
  shallow( <App /> );
});