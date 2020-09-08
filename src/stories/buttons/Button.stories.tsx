import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from '../../components/button/button';
import {defaultTheme} from '../../theme/create-theme';

export default {
  title: 'Example/Buttons/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const ButtonEnabled = Template.bind({});
ButtonEnabled.args = {
    label: 'Button Enabled',
	onClick: () => {},
	fullWidth: false,
	disabled: false,
	width: 200,
    theme: defaultTheme
};

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
    label: 'Button Disabled',
	onClick: () => {},
	fullWidth: false,
	disabled: true,
	width: 200,
    theme: defaultTheme
};

export const ButtonFullWidth = Template.bind({});
ButtonFullWidth.args = {
    label: 'Button Full Width',
	onClick: () => {},
	fullWidth: true,
	disabled: false,
    theme: defaultTheme
};