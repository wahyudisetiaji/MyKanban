import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAStxvaHzdCTFy-MMWaSAzdZtfZKvIaLbs',
  authDomain: 'omega-splicer-212703.firebaseapp.com',
  databaseURL: 'https://mykanban-16d48.firebaseio.com',
  projectId: 'omega-splicer-212703',
  storageBucket: 'omega-splicer-212703.appspot.com',
  messagingSenderId: '444358458118'
}

firebase.initializeApp(config)

var db = firebase.database()

export default db
