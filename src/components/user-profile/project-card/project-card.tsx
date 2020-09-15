import React from 'react';

import Spacer from '../../spacer/spacer';
import Menu from '../../menu/menu';
import {MenuItemData} from '../../menu/menu-item';
import Typography, { TypographyVariant } from '../../typography/typography';

import EditIcon from '../../icons/edit-icon';
import AddIcon from '../../icons/add-icon';
import MoreIcon from '../../icons/more-icon';

import './project-card.scss';

export interface Project {
  thumbnailUrl: string;
  name: string;
  id: string;
}

export interface ProjectCardProps {
	project: Project;
	onDelete: () => void;
	onAddToScene: (project: Project) => void;
	onStartAddingToScene: () => void;
	onDownloadProject: (project: Project) => void;
  onEdit: (project: Project) => void;
  deleteProject: (project: Project) => void;
  openProject: Function;
}

interface ProjectCardState {
	actionsVisible: boolean;
	addHighlighted: boolean;
	editHighlighted: boolean;
	moreHighlighted: boolean;
	moreMenuVisible: boolean;
}

class ProjectCard extends React.Component<ProjectCardProps, ProjectCardState> {
	private _cardContainer: HTMLDivElement;
	private _moreIconContainer: HTMLDivElement;

	private _cardContainerRect: DOMRect;
	private _moreIconRect: DOMRect;

	private _moreMenuItems: MenuItemData[] = [{
		label: 'Download project.zip',
		highlightColor: 'rgba(74, 115, 226, 0.1)',
		labelColor: '#4A73E2',
		onClick: this.onDownloadProjectAsync.bind(this)
	}, {
		label: 'Delete project',
		highlightColor: 'rgba(182, 0, 0, 0.1)',
		labelColor: '#B60000',
		onClick: this.onDeleteProjectAsync.bind(this)
	}];

	constructor(props: ProjectCardProps) {
		super(props);

		this.state = {
			actionsVisible: false,
			addHighlighted: false,
			editHighlighted: false,
			moreHighlighted: false,
			moreMenuVisible: false,
		};
	}

	public componentDidMount = (): void => {
		this._cardContainerRect = this._cardContainer.getBoundingClientRect();
	}

	public render = (): JSX.Element => {
		return (
			<div className='project-card-container' ref={(element): void => {
				this._cardContainer = element;
			}}>
				<div className='project-card-title'>
					<Typography variant={TypographyVariant.TEXT_SMALL} color='rgba(0, 0, 0, 0.6)'>
						{this.props.project.name || 'My project'}
					</Typography>
				</div>
				<div className='project-image-container' onMouseOver={this.openActions}>
					<div style={{
						background: `url(${this.props.project.thumbnailUrl}) no-repeat center`,
						backgroundSize: 'contain',
						width: '100%'
					}}/>
					{this.state.actionsVisible &&
					<div className='project-actions-container' onMouseLeave={this.closeActions}>
						<div className='project-actions-icon-container' onClick={this.onAddToSceneAsync} onMouseEnter={(): void => {this.onSetHighlightAdd(true)}} onMouseLeave={(): void => {this.onSetHighlightAdd(false)}}>
							<AddIcon fill={this.state.addHighlighted ? '#4A73E2' : 'black'} opacity={this.state.addHighlighted ? '1' : '0.6'} />
							<Spacer size={4} />
							<Typography variant={TypographyVariant.TEXT_X_SMALL} color={this.state.addHighlighted ? '#4A73E2' : 'rgba(0, 0, 0, 0.6)'}>
								Add to scene
							</Typography>
						</div>
						<Spacer size={24} />
						<div className='project-actions-icon-container' onClick={this.onEdit} onMouseEnter={(): void => {this.onSetHighlightedEdit(true)}} onMouseLeave={(): void => {this.onSetHighlightedEdit(false)}}>
							<EditIcon fill={this.state.editHighlighted ? '#4A73E2' : 'black'} opacity={this.state.editHighlighted ? '1' : '0.6'} />
							<Spacer size={4} />
							<Typography variant={TypographyVariant.TEXT_X_SMALL} color={this.state.editHighlighted ? '#4A73E2' : 'rgba(0, 0, 0, 0.6)'}>
								Edit
							</Typography>
						</div>
						<Spacer size={24} />
						<div ref={(element): void => {
								this._moreIconContainer = element;
						}} className='project-actions-icon-container' onMouseEnter={(): void => {this.onSetHighlightedMore(true)}} onMouseLeave={(): void => {this.onSetHighlightedMore(false)}} onClick={this.onToggleMoreMenuVisible}>
							<MoreIcon fill={this.state.moreHighlighted ? '#4A73E2' : 'black'} opacity={this.state.moreHighlighted ? '1' : '0.6'} />
							<Spacer size={4} />
							<Typography variant={TypographyVariant.TEXT_X_SMALL} color={this.state.moreHighlighted ? '#4A73E2' : 'rgba(0, 0, 0, 0.6)'}>
								More
							</Typography>
						</div>
					</div>}
				</div>
				{this.state.moreMenuVisible
				&& <div onMouseEnter={this.openActions} onMouseLeave={this.closeActions}>
					<Menu
						left={this._cardContainerRect.left}
						top={this._moreIconRect.bottom} width={240}
						pointerLeft={this._moreIconRect.left - this._cardContainerRect.left + (this._moreIconRect.width / 2)}
						menuItems={this._moreMenuItems}
					/>
				</div>}
			</div>
		);
	}

	private onEdit = (): void => {
		this.props.onEdit(this.props.project);
	}

	private onDownloadProjectAsync(): void {
		this.setState({
			moreMenuVisible: false,
			actionsVisible: false,
		});

		this.props.onDownloadProject(this.props.project);
	}

	private openActions = (): void => {
		this.setState({
			actionsVisible: true,
		});
	}

	private closeActions = (): void => {
		this.setState({
			actionsVisible: false,
		});
	}

	private async onDeleteProjectAsync(): Promise<void> {
    this.setState({
			moreMenuVisible: false,
			actionsVisible: false,
    });
    
		await this.props.deleteProject(this.props.project);
		this.props.onDelete();
	}

	private onAddToSceneAsync = async(): Promise<void> => {
    this.props.onStartAddingToScene();
    
		const project = await this.props.openProject(this.props.project);
		this.props.onAddToScene(project);
	}

	private onSetHighlightAdd = (highlighted: boolean): void => {
		this.setState({
			addHighlighted: highlighted,
		});
	}

	private onSetHighlightedEdit = (highlighted: boolean): void => {
		this.setState({
			editHighlighted: highlighted,
		});
	}

	private onSetHighlightedMore = (highlighted: boolean): void => {
		this.setState({
			moreHighlighted: highlighted,
		});
	}

	private onToggleMoreMenuVisible = (): void => {
		this._cardContainerRect = this._cardContainer.getBoundingClientRect();
		this._moreIconRect = this._moreIconContainer.getBoundingClientRect();

		this.setState({
			moreMenuVisible: !this.state.moreMenuVisible
		});
	}
}
export default ProjectCard;
