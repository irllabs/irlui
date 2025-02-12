import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import CircularProgress from '../components/circular-progress/circular-progress';

export default {
  title: 'Example/CircularProgress',
  component: CircularProgress,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <CircularProgress {...args} />;

export const Default = Template.bind({});
Default.args = {};
