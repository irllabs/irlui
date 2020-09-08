import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Input, { InputProps } from '../components/input/input';
import {defaultTheme} from '../theme/create-theme';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
    onChange: (value: string) => {},
	placeholder: 'your text goes here...',
	label: 'Text',
	type: 'text',
	value: '',
	fullWidth: false,
	error: ''
};

export const Error = Template.bind({});
Error.args = {
    onChange: (value: string) => {},
	placeholder: 'your text goes here...',
	label: 'Input with error',
	type: 'text',
	value: '',
	fullWidth: false,
	error: 'Error occured'
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    onChange: (value: string) => {},
	placeholder: 'your text goes here...',
	label: 'Full width input',
	type: 'text',
	value: '',
	fullWidth: true,
	error: ''
};

export const CustomColors = Template.bind({});
CustomColors.args = {
    onChange: (value: string) => {},
	placeholder: 'your text goes here...',
	label: 'Input with custom colors',
	type: 'text',
	value: '',
	fullWidth: false,
	backgroundColor: 'lightblue',
	color: 'green',
	inputColor: 'orange',
	error: ''
};

export const Password = Template.bind({});
Password.args = {
    onChange: (value: string) => {},
	placeholder: 'your password goes here...',
	label: 'Password',
	type: 'password',
	value: '',
	fullWidth: false,
	error: ''
};

export const Email = Template.bind({});
Email.args = {
    onChange: (value: string) => {},
	placeholder: 'your email goes here...',
	label: 'Email',
	type: 'email',
	value: '',
	fullWidth: false,
	error: ''
};