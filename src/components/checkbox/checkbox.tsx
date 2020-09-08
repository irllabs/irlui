import React from 'react';
import * as uuid from 'uuid';

import './checkbox.scss';
import Typography, { TypographyVariant } from '../typography/typography';
import { Theme } from '../../theme/create-theme';

export interface CheckboxProps {
	value: boolean;
	onChange: (data: any) => void;
	enabledLabel: string;
	disabledLabel: string;
	theme: Theme;
}

export default class Checkbox extends React.Component<CheckboxProps, {}> {
	public uniqueId = uuid.v1();

	constructor(props: CheckboxProps) {
		super(props);

		this.onToggle = this.onToggle.bind(this);
	}

	public render() {
		return (
			<div className='checkbox' onClick={this.onToggle} style={{
				backgroundColor: this.props.value ? this.props.theme.primary : this.props.theme.textDaylight2,
				paddingLeft: this.props.value ? '8px' : '4px',
				paddingRight: this.props.value ? '4px' : '8px',
			}}>
				<div className='checkbox-elements-container' style={{flexDirection: this.props.value ? 'row-reverse' : 'row'}}>
					<div className='checkbox-thumb'/>
					<Typography variant={TypographyVariant.TEXT_X_SMALL} color={this.props.theme.textDark3}>
						{this.props.value ? this.props.enabledLabel : this.props.disabledLabel}
					</Typography>
				</div>
			</div>
		);
	}

	private onToggle() {
		this.props.onChange(!this.props.value);
	}
}
