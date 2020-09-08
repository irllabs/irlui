import React from 'react';

import './icon-style.scss';

export interface EditIconProps {
	fill: string;
	opacity: string;
}

export default class EditIcon extends React.Component<EditIconProps, {}> {
	public render = (): JSX.Element => {
		return (
			<div className='icon-container'>
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d={"M22.6054 1.52639L22.4757 1.39648C20.6163 -0.465494 17.6326 -0.465494 15.73 1.39648L2.58442 14.5602C2.49793 14.6901 2.41145 14.82 2.36821 14.9499L0.0331409 22.9175C-0.053343 23.2206 0.0331409 23.567 0.249351 23.7835C0.422319 23.9134 0.68177 24 0.89798 24H1.11419L9.07071 21.6617C9.20044 21.6184 9.33016 21.5318 9.45989 21.4452L22.6054 8.28146C24.4649 6.41949 24.4649 3.43166 22.6054 1.52639ZM2.152 21.8782L3.57898 16.9851L7.03834 20.4493L2.152 21.8782ZM8.72478 19.7131L4.3141 15.2963L14.8651 4.73072L19.2758 9.1475L8.72478 19.7131ZM21.3947 7.02571L20.5298 7.93505L16.0759 3.47497L16.984 2.60893C18.1948 1.43978 20.0542 1.43978 21.2649 2.60893L21.3947 2.73884C22.5622 3.95129 22.519 5.81326 21.3947 7.02571Z"}
						fill={this.props.fill}
						fillOpacity={this.props.opacity}
					/>
				</svg>
			</div>
		);
	}
}
