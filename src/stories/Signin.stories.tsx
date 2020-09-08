import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import SignInDialog, { SignInDialogProps } from '../components/sign-in/sign-in';
import {defaultTheme} from '../theme/create-theme';

export default {
  title: 'Example/SignInDialog',
  component: SignInDialog,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SignInDialogProps> = (args) => <SignInDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
    onSignInWithGoogleAsync: () => {},
	onSignInAsync: (email: string, password: string) => {},
	onSignUpAsync: (email: string, password: string) => {},
	onClose: () => {},
	theme: defaultTheme
};
