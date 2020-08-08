import { firestore } from 'firebase';

export const createProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		//make asynchronous call(s) to database
		const firestore = getFirestore();
		firestore
			.collection('projects')
			.add({
				...project,
				authorFirstName: 'Asad',
				authorLastName: 'Abidi',
				authorId: 7698,
				createdAt: new Date()
			})
			.then(() => {
				dispatch({ type: 'CREATE_PROJECT', project: project });
			})
			.catch((err) => {
				dispatch({ type: 'CREATE_PROJECT_ERROR', err });
			});
	};
};
