import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Typography, { TypographyProps, TextAlignProperty, TypographyVariant } from '../components/typography/typography';
import {defaultTheme} from '../theme/create-theme';

export default {
  title: 'Example/Typography',
  component: Typography,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} >Example text</Typography>;

export const TEXT_X_SMALL = Template.bind({});
TEXT_X_SMALL.args = {
    variant: TypographyVariant.TEXT_X_SMALL,
	color: defaultTheme.textDaylight1,
	align: 'center',
	whiteSpace: 'no-wrap',
};
export const TEXT_SMALL = Template.bind({});
TEXT_SMALL.args = {
    variant: TypographyVariant.TEXT_SMALL,
	color: defaultTheme.textDaylight1,
	align: 'center',
	whiteSpace: 'no-wrap',
};
export const TEXT_MEDIUM = Template.bind({});
TEXT_MEDIUM.args = {
    variant: TypographyVariant.TEXT_MEDIUM,
	color: defaultTheme.textDaylight1,
	align: 'center',
	whiteSpace: 'no-wrap',
};
export const TEXT_LARGE = Template.bind({});
TEXT_LARGE.args = {
    variant: TypographyVariant.TEXT_LARGE,
	color: defaultTheme.textDaylight1,
	align: 'center',
	whiteSpace: 'no-wrap',
};
export const HEADING_SMALL = Template.bind({});
HEADING_SMALL.args = {
    variant: TypographyVariant.HEADING_SMALL,
	color: defaultTheme.textDaylight1,
	align: 'center',
	whiteSpace: 'no-wrap',
};
export const HEADING_MEDIUM = Template.bind({});
HEADING_MEDIUM.args = {
    variant: TypographyVariant.HEADING_MEDIUM,
	color: defaultTheme.textDaylight1,
	align: 'center',
	whiteSpace: 'no-wrap',
};
export const HEADING_LARGE = Template.bind({});
HEADING_LARGE.args = {
    variant: TypographyVariant.HEADING_LARGE,
	color: defaultTheme.textDaylight1,
	align: 'center',
	whiteSpace: 'no-wrap',
};
export const HEADING_X_LARGE = Template.bind({});
HEADING_X_LARGE.args = {
    variant: TypographyVariant.HEADING_X_LARGE,
	color: defaultTheme.textDaylight1,
	align: 'center',
	whiteSpace: 'no-wrap',
};
export const HEADING_XX_LARGE = Template.bind({});
HEADING_XX_LARGE.args = {
    variant: TypographyVariant.HEADING_XX_LARGE,
	color: defaultTheme.textDaylight1,
	align: 'center',
	whiteSpace: 'no-wrap',
};
export const HEADING_XXX_LARGE = Template.bind({});
HEADING_XXX_LARGE.args = {
    variant: TypographyVariant.HEADING_XXX_LARGE,
	color: defaultTheme.textDaylight1,
	align: 'center',
	whiteSpace: 'no-wrap',
};
export const HEADING_XXXX_LARGE = Template.bind({});
HEADING_XXXX_LARGE.args = {
    variant: TypographyVariant.HEADING_XXXX_LARGE,
	color: defaultTheme.textDaylight1,
	align: 'center',
	whiteSpace: 'no-wrap',
};
export const DISPLAY_BIG = Template.bind({});
DISPLAY_BIG.args = {
    variant: TypographyVariant.DISPLAY_BIG,
	color: defaultTheme.textDaylight1,
	align: 'center',
	whiteSpace: 'no-wrap',
};
export const DISPLAY_BIGGER = Template.bind({});
DISPLAY_BIGGER.args = {
    variant: TypographyVariant.DISPLAY_BIGGER,
	color: defaultTheme.textDaylight1,
	align: 'center',
	whiteSpace: 'no-wrap',
};
export const DISPLAY_BIGGEST = Template.bind({});
DISPLAY_BIGGEST.args = {
    variant: TypographyVariant.DISPLAY_BIGGEST,
	color: defaultTheme.textDaylight1,
	align: 'center',
	whiteSpace: 'no-wrap',
};