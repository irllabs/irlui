import React from 'react';

import './audio-selector.scss';

import Spacer from '../spacer/spacer';
import Slider, { SliderType } from '../slider/slider';
import BorderButton, { BorderVariant } from '../border-button/border-button';
import Typography, { TypographyVariant } from '../typography/typography';
import Checkbox from '../checkbox/checkbox';

import ThemeContext from '../../theme/theme-context';

import cancelImage from '../../../images/cancel.svg';
import playSmallImage from '../../../images/play-small.svg';
import volumeOn from '../../../images/volume-on.svg';
import loopImage from '../../../images/loop.svg';

interface AudioSelectorProps {
	title: string;
}

interface AudioSelectorState {
	audioData: string;
	playInLoop: boolean;
	fileName: string;
	isPlaying: boolean;
	currentTime: number;
	duration: number;
	volume: number;
}

export default class AudioSelector extends React.Component<AudioSelectorProps, AudioSelectorState> {
	private audioElement = React.createRef<HTMLAudioElement>();

	constructor(props: AudioSelectorProps) {
		super(props);

		this.state = {
			audioData: null,
			playInLoop: false,
			fileName: '',
			isPlaying: false,
			currentTime: 0,
			duration: 0,
			volume: 50,
		}

		this.onAudioSelected = this.onAudioSelected.bind(this);
		this.removeAudio = this.removeAudio.bind(this);
		this.togglePlay = this.togglePlay.bind(this);
		this.onSeek = this.onSeek.bind(this);
		this.onVolumeChange = this.onVolumeChange.bind(this);
		this.togglePlayInLoop = this.togglePlayInLoop.bind(this);
	}

	public componentDidMount() {
		this.audioElement.current.addEventListener("canplaythrough", () => {
			this.setState({
				duration: this.audioElement.current.duration,
			});
		});

		this.audioElement.current.addEventListener("timeupdate", () => {
			this.setState({
				currentTime: this.audioElement.current.currentTime,
			});
		});
	}

	public render() {
		return (
			<ThemeContext.Consumer>
				{(theme) => {
					return (
						<div className='audio-selector-container'>
							<audio
								ref={this.audioElement}
								src={this.state.audioData}
								loop={this.state.playInLoop}
							/>

							<div className='audio-selector-title'>
								<Typography variant={TypographyVariant.TEXT_MEDIUM} color={theme.textDaylight2}>
									{this.props.title}
								</Typography>
							</div>
							<input type='file' id='audio-selector-input' style={{display: 'none'}} onChange={this.onAudioSelected}/>
							{!this.state.audioData &&
							<label htmlFor='audio-selector-input'>
								<BorderButton label='Select audio' maxWidth={true} borderVariant={BorderVariant.DASHED} />
							</label>}
							{this.state.audioData &&
							<div className='audio-selector-controls'>
								<div className='audio-selector-file-name'>
									<Typography variant={TypographyVariant.TEXT_MEDIUM} color={theme.textDaylight1}>
										{this.state.fileName}
									</Typography>
									<img src={cancelImage} onClick={this.removeAudio} className='audio-selector-icon' />
								</div>
								<div className='audio-selector-play-controls'>
									<img src={playSmallImage} className='audio-selector-icon' onClick={this.togglePlay} />
									<Spacer size={20} />
									<Slider value={this.state.currentTime} maxValue={this.state.duration} type={SliderType.TIME} onChange={this.onSeek} />
								</div>
								<div className='audio-selector-volume-control'>
									<img src={volumeOn} className='audio-selector-icon' />
									<Spacer size={4} />
									<Typography variant={TypographyVariant.TEXT_MEDIUM} color={theme.textDaylight2} whiteSpace='nowrap'>
										Playback volume
									</Typography>
									<Spacer size={8} />
									<Slider value={this.state.volume} maxValue={100} type={SliderType.NUMBER} onChange={this.onVolumeChange} />
								</div>
								<div className='audio-selector-loop-control'>
									<div style={{display: 'flex'}}>
										<img src={loopImage} />
										<Spacer size={4} />
										<Typography variant={TypographyVariant.TEXT_MEDIUM} color={theme.textDaylight2}>
											Play in-loop
										</Typography>
									</div>
									<div>
										<Checkbox disabledLabel='No' enabledLabel='Yes' value={this.state.playInLoop} onChange={this.togglePlayInLoop} />
									</div>
								</div>
							</div>}
						</div>
					);
				}}
			</ThemeContext.Consumer>
		);
	}

	private onAudioSelected(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files[0];

		const fileReader = new FileReader();
		fileReader.onloadend = () => {
			this.setState({
				audioData: fileReader.result as string,
				fileName: file.name
			});
		};
		fileReader.readAsDataURL(file);
	}

	private removeAudio() {
		this.setState({
			audioData: null,
			fileName: ''
		});
	}

	private togglePlay() {
		this.setState({
			isPlaying: !this.state.isPlaying
		}, () => {
			if (!this.state.isPlaying) {
				this.audioElement.current.pause();
			}
			else {
				this.audioElement.current.play();
			}
		});
	}

	private onSeek(time: number) {
		this.setState({
			currentTime: time
		}, () => {
			this.audioElement.current.currentTime = time;
		});
	}

	private onVolumeChange(volume: number) {
		this.setState({
			volume: Math.max(0.01, volume),
		}, () => {
			this.audioElement.current.volume = Math.max(0, volume / 100);
		});
	}

	private togglePlayInLoop() {
		this.setState({
			playInLoop: !this.state.playInLoop,
		}, () => {
			this.audioElement.current.loop = this.state.playInLoop;
		});
	}
}
