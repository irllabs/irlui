import React from 'react';

import './profile-icon.scss';

import ThemeContext from '../theme/theme-context';

interface ProfileIconProps {
	profileImage: string;
	onClick?: () => void;
}

class ProfileIcon extends React.Component<ProfileIconProps, {}> {
	constructor(props: ProfileIconProps) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	public render = (): JSX.Element => {
		return (
			<ThemeContext.Consumer>
				{(theme) => {
					return (
						<img
							key='profile-image'
							className='profile-image'
							style={{
								borderColor: theme.primary,
								backgroundColor: theme.primary,
							}}
							src={this.props.profileImage}
							onClick={this.onClick}
						/>
					);
				}}
			</ThemeContext.Consumer>
		);
	}

	private onClick() {
		this.props.onClick();
	}
}
export default ProfileIcon;
