import React from 'react';

import './icon-style.scss';

interface RecorderIconProps {
	fill: string;
	opacity: string;
}

export default class RecorderIcon extends React.Component<RecorderIconProps, {}> {
	public render = (): JSX.Element => {
		return (
			<div className='icon-container'>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="12" cy="12" r="11" stroke={this.props.fill} strokeOpacity={this.props.opacity} strokeWidth="2"/>
					<path
						d="M15.1256 9.57497L17.2597 8.40561C17.5929 8.22303 18 8.46415 18 8.8441V15.1107C18 15.5007 17.5734 15.7405 17.2402 15.5379L15.1353 14.2577C14.9687 14.1564 14.7554 14.2763 14.7554 14.4713V15C14.7554 15.5523 14.3077 16 13.7554 16H7C6.44772 16 6 15.5523 6 15V9C6 8.44772 6.44772 8 7 8H13.7554C14.3077 8 14.7554 8.44772 14.7554 9V9.35573C14.7554 9.5457 14.959 9.66626 15.1256 9.57497Z"
						fill={this.props.fill}
						fillOpacity={this.props.opacity}
					/>
				</svg>
			</div>
		);
	}
}
