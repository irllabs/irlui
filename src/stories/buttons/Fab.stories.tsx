import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Fab, { FabProps } from '../../components/fab/fab';
import {defaultTheme} from '../../theme/create-theme';
import loop from '../../../images/loop.svg';

export default {
  title: 'Example/Buttons/Fab',
  component: Fab,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<FabProps> = (args) => <Fab {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: defaultTheme.primary,
	actionItems: [{name: 'Loop', action: 'loop', icon: loop}],
	onClick: (actionName: string) => {}
};
