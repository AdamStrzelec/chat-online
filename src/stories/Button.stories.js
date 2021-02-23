import React from 'react';

import Button from '../components/Button/Button';

export default {
  title: 'Button',
  component: Button
};

export const Primary = () => <Button>click me</Button>;
export const Secondary = () => <Button secondary>click me</Button>;


