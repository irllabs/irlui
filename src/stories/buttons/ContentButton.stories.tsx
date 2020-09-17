import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import ContentButton, { ContentButtonProps } from '../../components/content-button/content-button';
import {defaultTheme} from '../../theme/create-theme';

export default {
  title: 'Example/Buttons/ContentButton',
  component: ContentButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ContentButtonProps> = (args) => <ContentButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Content Button'
};
