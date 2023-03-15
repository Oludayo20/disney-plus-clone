import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCHZOsvwVapuwtZ_CDDAsjeXgzXQ5dOnE8',
  authDomain: 'disney-clone-823f4.firebaseapp.com',
  projectId: 'disney-clone-823f4',
  storageBucket: 'disney-clone-823f4.appspot.com',
  messagingSenderId: '999981900915',
  appId: '1:999981900915:web:c782c17fdaa6a362c67606',
  measurementId: 'G-QEFWL7ZCWP'
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider(firebaseApp);
provider.setCustomParameters({
  prompt: 'select_account'
});
const fStorage = getStorage(firebaseApp);

export { auth, provider, fStorage };
export default db;
