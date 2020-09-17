import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import BorderlessButton, {BorderlessButtonProps} from '../../components/borderless-button/borderless-button';

export default {
  title: 'Example/buttons/BorderlessButton',
  component: BorderlessButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<BorderlessButtonProps> = (args) => <BorderlessButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Borderless Button',
	color: {
		red: 1,
		green: 1,
		blue: 1
	},
	disabled: false,
	onClick: null
};
