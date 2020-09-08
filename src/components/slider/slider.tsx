import React from 'react';

import Typography, { TypographyVariant } from '../typography/typography';

import './slider.scss';
import { Theme } from '../../theme/create-theme';

export enum SliderType {
	NUMBER = 'number',
	TIME = 'time',
}

export interface SliderProps {
	value: number;
	maxValue: number;
	type: SliderType;
	onChange: (value: number) => void;
	theme: Theme;
}

interface SliderState {
	value: number;
}

export default class Slider extends React.Component<SliderProps, SliderState> {
	private sliderTrackElement = React.createRef<HTMLDivElement>();
	private movingThumb = false;

	constructor(props: SliderProps) {
		super(props);

		this.state = {
			value: 0,
		};

		this.onSliderMouseDown = this.onSliderMouseDown.bind(this);
		this.onSliderMouseMove = this.onSliderMouseMove.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
	}

	public componentDidMount() {
		window.addEventListener('mouseup', this.onMouseUp);
	}

	public componentWillUnmount() {
		window.removeEventListener('mouseup', this.onMouseUp);
	}

	public componentWillReceiveProps(props: SliderProps) {
		this.setState({

		});
	}

	get leftValue() {
		if (this.props.type === SliderType.TIME) {
			const minutes = Math.floor(this.props.value / 60);
			const seconds = Math.floor(this.props.value % 60);

			return `${minutes}:${seconds}`
		}
		else if (this.props.type === SliderType.NUMBER) {
			return '';
		}
	}

	get rightValue() {
		if (this.props.type === SliderType.TIME) {
			const minutes = Math.floor(this.props.maxValue / 60);
			const seconds = Math.floor(this.props.maxValue % 60);

			return `${minutes}:${seconds}`
		}
		else if (this.props.type === SliderType.NUMBER) {
			return Math.floor(this.props.value);
		}
	}

	public render() {
		return (
			<div className='slider-container'>
				<Typography variant={TypographyVariant.TEXT_X_SMALL} color={this.props.theme.textDaylight2}>
					{this.leftValue}
				</Typography>
				<div
					ref={this.sliderTrackElement}
					className='slider-track'
					onMouseDown={this.onSliderMouseDown}
					onMouseMove={this.onSliderMouseMove}
					style={{
						backgroundColor: this.props.theme.textDaylight3
					}}
				>
					<div className='slider-thumb' style={{
						backgroundColor: this.props.theme.textDaylight1,
						borderColor: this.props.theme.textDaylight1,
						left: `${(this.props.value / this.props.maxValue) * 100}%`
					}}>

					</div>
				</div>
				<Typography variant={TypographyVariant.TEXT_X_SMALL} color={this.props.theme.textDaylight2} >
					{this.rightValue}
				</Typography>
			</div>
		);
	}

	private onSliderMouseDown(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		const sliderTrackRect = this.sliderTrackElement.current.getBoundingClientRect();

		const startX = sliderTrackRect.left;
		const currentX = event.clientX;
		const currentValue = currentX - startX;
		const maxValue = sliderTrackRect.width;
		const currentValuePercentage = currentValue / maxValue;

		this.props.onChange(this.props.maxValue * currentValuePercentage);

		this.movingThumb = true;
	}

	private onSliderMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		if (!this.movingThumb) {
			return;
		}

		const sliderTrackRect = this.sliderTrackElement.current.getBoundingClientRect();

		const startX = sliderTrackRect.left;
		const currentX = event.clientX;
		const currentValue = currentX - startX;
		const maxValue = sliderTrackRect.width;
		const currentValuePercentage = currentValue / maxValue;

		this.props.onChange(this.props.maxValue * currentValuePercentage);
	}

	private onMouseUp(event: MouseEvent) {
		this.movingThumb = false;
	}
}
