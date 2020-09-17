import React from 'react';

import Fab from '../fab/fab';
import ContentButton from '../content-button/content-button';
import Spacer from '../spacer/spacer';
import Tooltip from '../tooltip/tooltip';
import Icon, {IconSize} from '../icons/icon';
import {defaultTheme} from '../../theme/create-theme'

import PlayIcon from '../../../images/play.svg'
import StopIcon from '../../../images/stop.svg'
import GifIcon from '../../../images/gif.svg'

import './bottom-bar.scss';

interface BottomBarState {
	handTrackingEnabled: boolean;
	handTrackingTooltipVisible: boolean;
}

class BottomBar extends React.Component<{}, BottomBarState> {
	constructor(props: {}) {
		super(props);

		this.state = {
			handTrackingEnabled: false,
			handTrackingTooltipVisible: true,
		};
	}

	public render(): JSX.Element {
		return (
			<div className='bottom-bar-container'>
				<div className='bottom-bar-items'>
					<ContentButton>
						<Icon url={GifIcon}/>
					</ContentButton>
					<Spacer size={12} />
					<div style={{position: 'relative'}}>
						<ContentButton
							onClick={this.onToggleHandTracking}
							label={this.state.handTrackingEnabled ? 'Stop hand detection' : 'Start hand detection'}
						>
							{!this.state.handTrackingEnabled && <Icon url={PlayIcon} size={IconSize.SMALL} />}
							{this.state.handTrackingEnabled && <Icon url={StopIcon} size={IconSize.SMALL} />}
						</ContentButton>
						<Tooltip
							text='Give your webcam access to animate your puppet using your hands'
							open={this.state.handTrackingTooltipVisible}
							onClose={this.onCloseHandTrackingTooltip}
						/>
					</div>
				</div>
				<Fab color={defaultTheme.primary} onClick={null} />
			</div>
		);
	}

	private onToggleHandTracking = (): void => {
		this.setState({
			handTrackingEnabled: !this.state.handTrackingEnabled,
			handTrackingTooltipVisible: false,
		}, () => {
			// dranimate.setHandTrackingEnabled(this.state.handTrackingEnabled);
		});
	}

	private onCloseHandTrackingTooltip = (): void => {
		this.setState({
			handTrackingTooltipVisible: false,
		});
	}
}
export default BottomBar;
