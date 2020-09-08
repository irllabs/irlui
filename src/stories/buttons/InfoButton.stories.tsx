import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import InfoButton, { InfoButtonProps } from '../../components/info-button/info-button';
import {defaultTheme} from '../../theme/create-theme';

export default {
  title: 'Example/Buttons/InfoButton',
  component: InfoButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<InfoButtonProps> = (args) => <InfoButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    backgroundColor: defaultTheme.primary,
	splitterColor: defaultTheme.primary2
};
