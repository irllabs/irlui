import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import ShareIcon, {ShareIconProps}  from '../../components/icons/share-icon';
import {defaultTheme} from '../../theme/create-theme';

export default {
  title: 'Example/Icons/ShareIcon',
  component: ShareIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ShareIconProps> = (args) => <ShareIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
    fill: defaultTheme.primary,
    opacity: 0.5
};
