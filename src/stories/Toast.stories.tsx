import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Toast, { ToastProps } from '../components/toast/toast';
import {defaultTheme} from '../theme/create-theme';

export default {
  title: 'Example/Toast',
  component: Toast,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ToastProps> = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
	text: 'Test Toast Text',
	duration: 5
};
