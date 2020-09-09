import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import BorderButton, { BorderButtonProps, ColorVariant, BorderVariant } from '../../components/border-button/border-button';
import { defaultTheme } from '../../theme/create-theme';

export default {
    title: 'Example/Buttons/BorderButton',
    component: BorderButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<BorderButtonProps> = (args) => <BorderButton {...args} />;

export const PrimarySolidBorder = Template.bind({});
PrimarySolidBorder.args = {
    label: 'Primary Solid Border',
    variant: ColorVariant.PRIMARY,
    borderVariant: BorderVariant.SOLID,
    onClick: () => { },
    maxWidth: false,
    theme: defaultTheme
};

export const PrimaryDashedBorder = Template.bind({});
PrimaryDashedBorder.args = {
    label: 'Primary Dashed Border',
    variant: ColorVariant.PRIMARY,
    borderVariant: BorderVariant.DASHED,
    onClick: () => { },
    maxWidth: false,
    theme: defaultTheme
};

export const SecondarySolidBorder = Template.bind({});
SecondarySolidBorder.args = {
    label: 'Secondary Solid Border',
    variant: ColorVariant.SECONDARY,
    borderVariant: BorderVariant.SOLID,
    onClick: () => { },
    maxWidth: false,
    theme: defaultTheme
};

export const SecondaryDashedBorder = Template.bind({});
SecondaryDashedBorder.args = {
    label: 'Secondary Dashed Border',
    variant: ColorVariant.SECONDARY,
    borderVariant: BorderVariant.DASHED,
    onClick: () => { },
    maxWidth: false,
    theme: defaultTheme
};