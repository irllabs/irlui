import React from 'react';

import infoIcon from '../../../images/info.svg';

import './info-button.scss';

interface InfoButtonProps {
	backgroundColor: string;
	splitterColor: string;
}

export default class InfoButton extends React.Component<InfoButtonProps, {}> {
	constructor(props: InfoButtonProps) {
		super(props);
	}

	public render() {
		return (
			<div className='info-button-container' style={{backgroundColor: this.props.backgroundColor}}>
				{/* Content on the left side of the button */}
				{this.props.children}
				{/* Vertical splitter */}
				<div className='info-button-splitter' style={{backgroundColor: this.props.splitterColor}}/>
				{/* Info button */}
				<img className='info-button-image' src={infoIcon} />
			</div>
		);
	}
}
