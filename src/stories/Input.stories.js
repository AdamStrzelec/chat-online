import React from 'react';
import Input from '../components/Input/Input';

export default {
  title: 'Input',
  component: Input
};

export const Text = () => <Input placeholder={'Wprowadź tekst'}/>
export const Password = () => <Input placeholder={'Wprowadź hasło'} type={'password'}/>