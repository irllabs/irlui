import React from 'react';

import './profile-icon.scss';
import { Theme } from '../../theme/create-theme';

export interface ProfileIconProps {
	profileImage: string;
	onClick?: () => void;
	theme: Theme;
}

class ProfileIcon extends React.Component<ProfileIconProps, {}> {
	constructor(props: ProfileIconProps) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	public render = (): JSX.Element => {
		return (
			<img
				key='profile-image'
				className='profile-image'
				style={{
					borderColor: this.props.theme.primary,
					backgroundColor: this.props.theme.primary,
				}}
				src={this.props.profileImage}
				onClick={this.onClick}
			/>
		);
	}

	private onClick() {
		this.props.onClick();
	}
}
export default ProfileIcon;
