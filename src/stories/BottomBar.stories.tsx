import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import BottomBar from '../components/bottom-bar/bottom-bar';

export default {
  title: 'Example/BottomBar',
  component: BottomBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <BottomBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
