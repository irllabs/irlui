import React from 'react';

import ThemeContext from '../../../theme/theme-context';

import Typography, { TypographyVariant } from '../typography/typography';

import './border-button.scss'

export enum Variant {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

export enum BorderVariant {
	SOLID = 'solid',
	DASHED = 'dashed',
}

interface BorderButtonProps {
	label: string;
	onClick?: () => void;
	variant?: Variant;
	borderVariant?: BorderVariant;
	maxWidth?: boolean;
}

export default class BorderButton extends React.Component<BorderButtonProps, {}> {
	constructor(props: BorderButtonProps) {
		super(props);
	}

	public render() {
		return (
			<ThemeContext.Consumer>
				{(theme) => {
					return (
						<div className='border-button' style={{
							width: this.props.maxWidth ? '100%' : 'auto',
							borderColor: this.props.variant === Variant.PRIMARY ? theme.primary : theme.textDaylight2,
							borderStyle: this.props.borderVariant || 'solid'
						}} onClick={this.props.onClick}>
							<Typography
								variant={TypographyVariant.HEADING_MEDIUM}
								color={this.props.variant === Variant.PRIMARY ? theme.primary : theme.textDaylight2}
							>
								{this.props.label}
							</Typography>
						</div>
					);
				}}
			</ThemeContext.Consumer>
		);
	}
}
