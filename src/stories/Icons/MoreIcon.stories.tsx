import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import MoreIcon, {MoreIconProps}  from '../../components/icons/more-icon';
import {defaultTheme} from '../../theme/create-theme';

export default {
  title: 'Example/Icons/MoreIcon',
  component: MoreIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<MoreIconProps> = (args) => <MoreIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
    fill: defaultTheme.primary,
    opacity: 0.5
};
