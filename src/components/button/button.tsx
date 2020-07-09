import React from 'react';

import Typography, { TypographyVariant } from '../typography/typography';

import './button.scss';
import { Theme } from '../../theme/create-theme';

interface ButtonProps {
	label: string;
	onClick?: () => void;
	fullWidth?: boolean;
	disabled?: boolean;
	width?: number;
	theme: Theme;
}

class Button extends React.Component<ButtonProps, {}> {
	constructor(props: ButtonProps) {
		super(props);
	}

	public render = (): JSX.Element => {
		let buttonWidth = '';
		if (this.props.fullWidth) {
			buttonWidth = '100%';
		}
		if (this.props.width) {
			buttonWidth = `${this.props.width}px`;
		}

		return (
			<div style={{
				width: buttonWidth,
				backgroundColor: this.props.disabled ? this.props.theme.primary2 : this.props.theme.primary
			}} className='button-container' onClick={this.onClick}>
				<Typography variant={TypographyVariant.HEADING_MEDIUM} color='#FFFFFF'>
					{this.props.label}
				</Typography>
			</div>
		);
	}

	private onClick = (): void => {
		if (this.props.disabled) {
			return;
		}
		this.props.onClick();
	}
}
export default Button;
