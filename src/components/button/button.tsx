import React from 'react';

import Typography, { TypographyVariant } from '../typography/typography';

import './button.scss';
import ThemeContext from '../../../theme/theme-context';

interface ButtonProps {
	label: string;
	onClick?: () => void;
	fullWidth?: boolean;
	disabled?: boolean;
	width?: number;
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
			<ThemeContext.Consumer>
				{(theme) => {
					return (
						<div style={{
							width: buttonWidth,
							backgroundColor: this.props.disabled ? theme.primary2 : theme.primary
						}} className='button-container' onClick={this.onClick}>
							<Typography variant={TypographyVariant.HEADING_MEDIUM} color='#FFFFFF'>
								{this.props.label}
							</Typography>
						</div>
					);
				}}
			</ThemeContext.Consumer>
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
