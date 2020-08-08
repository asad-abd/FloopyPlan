import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAmleGLxTV50A9xLKhJ0QoJNwBBCGkRi0Q',
	authDomain: 'floopyplan-5d3a9.firebaseapp.com',
	databaseURL: 'https://floopyplan-5d3a9.firebaseio.com',
	projectId: 'floopyplan-5d3a9',
	storageBucket: 'floopyplan-5d3a9.appspot.com',
	messagingSenderId: '485387125288',
	appId: '1:485387125288:web:213c6fcfdb9f1d7680eb1d',
	measurementId: 'G-QFTP9ENPQ6'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
//firebase.analytics();

export default firebase;
