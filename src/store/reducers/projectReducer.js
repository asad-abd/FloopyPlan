const initState = {
	projects: [
		{ id: 1, title: 'Help me do my work', content: 'pretty pleaseeeeee' },
		{ id: 2, title: "Don't help me", content: 'do as you wish' },
		{ id: 3, title: 'Do what you want!', content: 'phhhft' }
	]
};

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			console.log('created project', action.project);
			return state;
		case 'CREATE_PROJECT_ERROR':
			console.log('created project error', action.err);
			return state;
		default:
			return state;
	}
};

export default projectReducer;
