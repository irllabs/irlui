import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Menu, { MenuProps } from '../components/menu/menu';
import {defaultTheme} from '../theme/create-theme';

export default {
  title: 'Example/Menu',
  component: Menu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  top: 5,
	left: 5,
	width: 200,
	pointerLeft: 20,
	menuItems: [
    {
      label: 'First menu item',
      labelColor: defaultTheme.primary,
      highlightColor: defaultTheme.primary2,
      onClick: null
    },
    {
      label: 's menu item',
      labelColor: defaultTheme.primary,
      highlightColor: defaultTheme.primary2,
      onClick: null
    }
  ]
};
