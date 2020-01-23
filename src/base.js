import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import { API_KEY } from './api_key';

const firebaseApp = firebase.initializeApp({
   apiKey: { API_KEY },
   authDomain: 'restaurants-commands-reactjs.firebaseapp.com',
   databaseURL: 'https://restaurants-commands-reactjs.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
