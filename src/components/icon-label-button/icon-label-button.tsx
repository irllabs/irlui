import React from 'react';

import Spacer from '../spacer/spacer';
import Typography, { TypographyVariant } from '../typography/typography';

import './icon-label-button.scss';

import ThemeContext from '../../theme/theme-context';

interface IconLabelButtonProps {
	label: string;
	icon: any;
	onClick?: () => void;
}

interface IconLabelButtonState {
	highlighted: boolean;
}

export default class IconLabelButton extends React.Component<IconLabelButtonProps, IconLabelButtonState> {
	constructor(props: IconLabelButtonProps) {
		super(props);

		this.state = {
			highlighted: false,
		};

		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
	}

	public render() {
		const Icon = this.props.icon;

		return (
			<ThemeContext.Consumer>
				{(theme) => {
					return (
						<div className='icon-label-button-container' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.props.onClick}>
							<Icon opacity={1} fill={this.state.highlighted ? theme.primary : theme.textDaylight2} />
							<Spacer size={4} />
							<Typography variant={TypographyVariant.TEXT_X_SMALL} color={this.state.highlighted ? theme.primary : theme.textDaylight2}>
								{this.props.label}
							</Typography>
						</div>
					);
				}}
			</ThemeContext.Consumer>
		);
	}

	private onMouseEnter() {
		this.setState({
			highlighted: true,
		});
	}

	private onMouseLeave() {
		this.setState({
			highlighted: false,
		});
	}
}
