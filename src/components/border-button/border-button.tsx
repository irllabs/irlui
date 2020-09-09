import React from 'react';
import Typography, { TypographyVariant } from '../typography/typography';

import './border-button.scss'
import { Theme } from '../../theme/create-theme';

export enum ColorVariant {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

export enum BorderVariant {
	SOLID = 'solid',
	DASHED = 'dashed',
}

export interface BorderButtonProps {
	label: string;
	onClick?: () => void;
	variant?: ColorVariant;
	borderVariant?: BorderVariant;
	maxWidth?: boolean;
	theme: Theme;
}

export default class BorderButton extends React.Component<BorderButtonProps, {}> {
	constructor(props: BorderButtonProps) {
		super(props);
	}

	public render() {
		return (
			<div className='border-button' style={{
				width: this.props.maxWidth ? '100%' : 'auto',
				borderColor: this.props.variant === ColorVariant.PRIMARY ? this.props.theme.primary : this.props.theme.textDaylight2,
				borderStyle: this.props.borderVariant || 'solid'
			}} onClick={this.props.onClick}>
				<Typography
					variant={TypographyVariant.HEADING_MEDIUM}
					color={this.props.variant === ColorVariant.PRIMARY ? this.props.theme.primary : this.props.theme.textDaylight2}
				>
					{this.props.label}
				</Typography>
			</div>
		);
	}
}
