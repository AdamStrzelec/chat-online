import React from 'react';

import Header from '../components/Header/Header';

export default {
  title: 'Header',
  component: Header
};

export const Primary = () => <Header>header</Header>;
export const Heading = () => <Header heading>heading</Header>;