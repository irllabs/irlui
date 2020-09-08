import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import IconLabelButton, { IconLabelButtonProps } from '../../components/icon-label-button/icon-label-button';
import EditIcon  from '../../components/icons/edit-icon';
import {defaultTheme} from '../../theme/create-theme';

export default {
  title: 'Example/Buttons/IconLabelButton',
  component: IconLabelButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<IconLabelButtonProps> = (args) => <IconLabelButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Edit',
	icon: EditIcon,
	onClick: () => {},
    theme: defaultTheme
};
