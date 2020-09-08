import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import AudioSelector, { AudioSelectorProps } from '../components/audio-selector/audio-selector';
import {defaultTheme} from '../theme/create-theme';

export default {
  title: 'Example/AudioSelector',
  component: AudioSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<AudioSelectorProps> = (args) => <AudioSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Audio Selector Title',
  theme: defaultTheme
};
