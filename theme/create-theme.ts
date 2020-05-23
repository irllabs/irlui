export interface Theme {
	primary: string;
	primary2: string;
}

export default function(theme: Theme): Theme {
	return {
		primary: theme.primary || 'rgba(74, 115, 226, 1)',
		primary2: theme.primary2 || 'rgba(74, 115, 226, 0.6)'
	}
}
