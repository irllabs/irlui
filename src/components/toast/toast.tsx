import React, { Component } from 'react';
import { v1 as uuid } from 'uuid';

// import showToastEvent, { ShowToastEventData } from '../../../services/eventManager/show-toast-event';

import './toast.scss';
import Typography, { TypographyVariant } from '../typography/typography';
import Spacer from '../spacer/spacer';
import SuccessIcon from '../../../images/success.svg'

export interface ToastProps {
	open: boolean;
	text: string;
	duration: number;
}

class Toast extends Component<ToastProps> {
	private _showEventId = uuid();
	private _containerRef = React.createRef<HTMLDivElement>();

	constructor(props) {
		super(props);
	}

	public componentDidMount = (): void => {
		// showToastEvent.subscribe({
		// 	id: this._showEventId,
		// 	callback: this.show,
		// });
	}

	public componentWillUnmount = (): void => {
		// showToastEvent.unsubscribe(this._showEventId);
	}

	public render = (): JSX.Element => {
		return (
			this.props.open &&
			<div ref={this._containerRef} className='toast-container'>
				<img src={SuccessIcon} />
				<Spacer size={8} />
				<Typography variant={TypographyVariant.TEXT_SMALL} color='#FFFFFF'>
					{this.props.text}
				</Typography>
			</div>
		);
	}

	private show = (data: any): void => {
		this.setState({
			open: true,
			text: data.text,
			duration: data.duration,
		}, () => {
			this._containerRef.current.addEventListener('animationend', this.onAnimationEnd);
		});
	}

	private onAnimationEnd = (): void => {
		this._containerRef.current.removeEventListener('animationend', this.onAnimationEnd);

		window.setTimeout(() => {
			this.setState({
				open: false,
				text: '',
			});
		}, this.props.duration * 1000);
	}
}

export default Toast;
