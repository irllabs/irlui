import React from 'react';

// import apiService from 'services/api/apiService';
// import userService from 'services/api/userService';
// import { savePuppetToFile } from 'services/storage/serializer';

// import showToastEvent from 'services/eventManager/show-toast-event';
// import editPuppetEvent from 'services/eventManager/edit-puppet-event';

import Typography, { TypographyVariant } from '../typography/typography';
import Spacer from '../spacer/spacer';
import BorderButton from '../border-button/border-button';
import ProjectCard, {Project} from './project-card/project-card';
import CircularProgress from '../circular-progress/circular-progress';
import {defaultTheme} from '../../theme/create-theme';
import closeIcon from '../../../images/close.svg';
import defaultProfileImage from '../../../images/profile-image-placeholder.svg';

import './user-profile.scss';

interface CloseAction {
  action?: string;
  project?: Project;
}
export interface UserProfileProps {
	onClose: (action: CloseAction | any) => Project;
  user: any;
  openProject: Function;
  getAllProjectsForUser: Function;
  signOut: Function;
  saveProjectToFile: Function;
}

interface UserProfileState {
	userProjects: any[];
	showLoadingOverlay: boolean;
	loadingOverlayMessage: string;
}

class UserProfile extends React.Component<UserProfileProps, UserProfileState> {

	constructor(props: UserProfileProps) {
		super(props);

		this.state = {
			userProjects: [],
			showLoadingOverlay: false,
			loadingOverlayMessage: '',
		};
	}

	public componentDidMount = (): void => {
		this.fetchProjectsForUserAsync();
	}

	public render = (): JSX.Element[] => {
		return ([
			<div key='backdrop' className='user-profile-backdrop' onClick={this.props.onClose}/>,
			<div key='profile-container' className='user-profile-container'>
				<div className='user-profile-dialog'>
					{this.state.showLoadingOverlay
					&& <div className='user-profile-loading-overlay'>
						<CircularProgress />
						<Spacer size={10} />
						<Typography variant={TypographyVariant.HEADING_SMALL} color='#4A73E2' >
							{this.state.loadingOverlayMessage}
						</Typography>
					</div>}
					<div className='user-profile-dialog-title'>
						<img className='user-profile-close-button' src={closeIcon} onClick={this.props.onClose}/>
						<div className='user-profile-title-container'>
							<Typography variant={TypographyVariant.TEXT_LARGE} color='rgba(0, 0, 0, 0.9)'>
								Your Profile
							</Typography>
						</div>
					</div>
					<div className='user-profile-main-info'>
						<div className='user-profile-main-info-left-side'>
							<img src={this.props.user.photoURL || defaultProfileImage} className='user-profile-image' />
							<div className='user-profile-info'>
								<Typography variant={TypographyVariant.TEXT_LARGE} color='rgba(0, 0, 0, 0.6)'>
									{this.props.user.email}
								</Typography>
								<Spacer size={4} />
								<Typography variant={TypographyVariant.TEXT_SMALL} color='rgba(0, 0, 0, 0.6)'>
									Google account
								</Typography>
							</div>
						</div>
						<div className='user-profile-main-info-right-side'>
							<BorderButton theme={defaultTheme} label='Logout' onClick={this.onUserLogoutAsync} />
						</div>
					</div>
					<div className='user-profile-items'>
						<Typography color='rgba(0, 0, 0, 0.6)' variant={TypographyVariant.TEXT_LARGE}>
							Projects ({this.state.userProjects.length})
						</Typography>
						<Spacer size={12} />
						<div className='user-profile-project-list-grid'>
							{this.state.userProjects.map((project) => {
								return (
									<ProjectCard
                    deleteProject={() => {}}
                    openProject={() => {}}
										key={project.id}
										project={project}
										onDelete={this.onProjectDeleted}
										onAddToScene={this.onAddToScene}
										onStartAddingToScene={this.onStartAddingToScene}
										onDownloadProject={this.onDownloadProjectAsync}
										onEdit={this.onEditAsync}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		]);
	}

	private onEditAsync = async (project: any): Promise<void> => {
		this.setState({
			showLoadingOverlay: true,
			loadingOverlayMessage: 'Preparing your project for edit. This may take a while...'
		});
		const projectModel = await this.props.openProject(project);
    this.props.onClose({'edit': projectModel });
    this.setState({
			showLoadingOverlay: false
		});
	}

	private fetchProjectsForUserAsync = async(): Promise<void> => {
		const projects = await this.props.getAllProjectsForUser();
		if (!projects) {
			return;
		}

		this.setState({
			userProjects: projects
		});
	}

	private onDownloadProjectAsync = async (project: any): Promise<void> => {
		this.setState({
			showLoadingOverlay: true,
			loadingOverlayMessage: 'Preparing your project for export. This may take a while...'
		});
		this.props.saveProjectToFile(project);
		this.setState({
			showLoadingOverlay: false,
		});
	}

	private onProjectDeleted = (): void => {
		this.fetchProjectsForUserAsync();
	}

	private onUserLogoutAsync = async(): Promise<void> => {
		await this.props.signOut();
	}

	private onAddToScene = (project: Project): void => {
		this.props.onClose(project);
		this.setState({
			showLoadingOverlay: false
		});
	}

	private onStartAddingToScene = (): void => {
		this.setState({
			showLoadingOverlay: true,
			loadingOverlayMessage: 'Loading the project. This may take a while...'
		});
	}
}
export default UserProfile;