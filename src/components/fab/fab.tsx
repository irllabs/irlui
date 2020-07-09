import React from 'react';

import Typography, { TypographyVariant } from '../typography/typography';

import colors from '../../../styles/colors';

import './fab.scss';

export interface FabActionItem {
	name: string;
	action: string;
	icon: string;
}

interface FabProps {
	color: string;
	actionItems: FabActionItem[];
	onClick: (actionName: string) => void;
}

interface FabState {
	open: boolean;
}

class Fab extends React.Component<FabProps, FabState> {
	constructor(props: FabProps) {
		super(props);

		this.state = {
			open: false,
		};
	}

	public render = (): JSX.Element => {
		const style = {
			backgroundColor: this.state.open ? '#D74C4C' : this.props.color
		};

		return (
			<div style={style} className='fab-container' onClick={this.toggle}>
				<img className={this.state.open ? 'fab-icon-rotated' : ''} src='assets/icons/plus.svg' />
				{this.state.open
				&& <div className='fab-action-items-container'>
					{this.props.actionItems.map((actionItem) => {
						return (
							<div key={actionItem.action} className='fab-action-item-container' onClick={() => {this.onActionClick(actionItem.action)}}>
								<div className='fab-action-item-icon-container'>
									<img src={actionItem.icon} />
								</div>
								<div className='fab-action-item-label-container'>
									<Typography variant={TypographyVariant.TEXT_SMALL} color={colors.textDaylight2} >
										{actionItem.name}
									</Typography>
								</div>
							</div>
						);
					})}
				</div>}
			</div>
		);
	}

	private toggle = (): void => {
		this.state.open ? this.close() : this.open();
	}

	private open = (): void => {
		this.setState({
			open: true,
		});
	}

	private close = (): void => {
		this.setState({
			open: false,
		});
	}

	private onActionClick = (action: string): void => {
		this.props.onClick(action);
	}
}
export default Fab;
