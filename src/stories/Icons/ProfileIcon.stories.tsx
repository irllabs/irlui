import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import ProfileIcon, { ProfileIconProps } from '../../components/profile-icon/profile-icon';
import {defaultTheme} from '../../theme/create-theme';
import profileImage from '../../../images/profile_image.jpg';

export default {
  title: 'Example/Icons/ProfileIcon',
  component: ProfileIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ProfileIconProps> = (args) => <ProfileIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
    profileImage,
	onClick: () => {},
	theme: defaultTheme
};
