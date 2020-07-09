import React from 'react';
import uuid from 'uuid/v1';

import ThemeContext from '../../../theme/theme-context';

import './checkbox.scss';
import Typography, { TypographyVariant } from '../typography/typography';

interface CheckboxProps {
	value: boolean;
	onChange: (data: any) => void;
	enabledLabel: string;
	disabledLabel: string;
}

export default class Checkbox extends React.Component<CheckboxProps, {}> {
	public uniqueId = uuid();

	constructor(props: CheckboxProps) {
		super(props);

		this.onToggle = this.onToggle.bind(this);
	}

	public render() {
		return (
			<ThemeContext.Consumer>
				{(theme) => {
					return (
						<div className='checkbox' onClick={this.onToggle} style={{
							backgroundColor: this.props.value ? theme.primary : theme.textDaylight2,
							paddingLeft: this.props.value ? '8px' : '4px',
							paddingRight: this.props.value ? '4px' : '8px',
						}}>
							<div className='checkbox-elements-container' style={{flexDirection: this.props.value ? 'row-reverse' : 'row'}}>
								<div className='checkbox-thumb'/>
								<Typography variant={TypographyVariant.TEXT_X_SMALL} color={theme.textDark3}>
									{this.props.value ? this.props.enabledLabel : this.props.disabledLabel}
								</Typography>
							</div>
						</div>
					);
				}}
			</ThemeContext.Consumer>
		);
	}

	private onToggle() {
		this.props.onChange(!this.props.value);
	}
}
