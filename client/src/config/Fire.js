import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyDY6NzOW2WTe2lTT_699EtBYlbo5wVhPrg",
    authDomain: "cameras-85ed4.firebaseapp.com",
    databaseURL: "https://cameras-85ed4.firebaseio.com",
    projectId: "cameras-85ed4",
    storageBucket: "cameras-85ed4.appspot.com",
    messagingSenderId: "267447055624"
  };

const fire = firebase.initializeApp(config);
export default fire;