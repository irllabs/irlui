export interface Theme {
	primary: string;
	primary2: string;
	textDaylight1: string;
	textDaylight2: string;
	textDaylight3: string;
	textDark3: string;
}

export default function(theme: Theme): Theme {
	return {
		primary: theme.primary || 'rgba(74, 115, 226, 1)',
		primary2: theme.primary2 || 'rgba(74, 115, 226, 0.6)',
		textDaylight1: theme.textDaylight1 || 'rgba(0, 0, 0, 0.9)',
		textDaylight2: theme.textDaylight2 || 'rgba(0, 0, 0, 0.6)',
		textDaylight3: theme.textDaylight3 || 'rgba(0, 0, 0, 0.3)',
		textDark3: theme.textDark3 || 'rgba(255, 255, 255, 0.7)',
	}
}
