import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBsP4qYV4f1RzHX7RSRV-zOmJC29zGAD24",
    authDomain: "expensify-a06a0.firebaseapp.com",
    databaseURL: "https://expensify-a06a0.firebaseio.com",
    projectId: "expensify-a06a0",
    storageBucket: "expensify-a06a0.appspot.com",
    messagingSenderId: "977695825544",
    appId: "1:977695825544:web:d9a94aa204954bb5ea093d",
    measurementId: "G-B2WGMR8K5Y"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()

  database.ref().set({
      name: 'Donald Jindra',
      age: 43,
      isSingle: true,
      location: {
          city: 'Los Angeles',
          country: 'United States'
      }
  });

//   database.ref().set('This is my data')

database.ref('age').set(44);
database.ref('location/city').set('New York');
database.ref('attributes').set({
    height: 70,
    weight: 135
});