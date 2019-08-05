/**
 * Firebase : npm install firebase --save 
 *  
 * 
 *  */
/*------------ import firebase : now we can use firebase in our project using firebase ---------------------*/
 import * as firebase from 'firebase';


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC91VgRZu9FbnnDNrqte30fr6GFaWmPRaI",
    authDomain: "raochat-96238.firebaseapp.com",
    databaseURL: "https://raochat-96238.firebaseio.com",
    projectId: "raochat-96238",
    storageBucket: "raochat-96238.appspot.com",
    messagingSenderId: "995992327252",
    appId: "1:995992327252:web:568e73026dca4005"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //Database 
  const firebaseDB = firebase.firestore();
  const googleAuth = new firebase.auth.GoogleAuthProvider();

  let firebasePosts =  firebaseDB.collection('posts');
  let firebaseEvents = firebaseDB.collection('events');
  
  /*------- loop the data come from firebase and return array ----------*/
  const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach(function(doc) {  
            data.push(doc.data().item);
    });
    return data;
  }


/*


firebaseDB.collection("events").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        firebaseEvents = doc.data();

    });
});


  
*/

  export{
      firebase,
    firebaseDB,
    googleAuth,
    firebasePosts,
    firebaseEvents,
    firebaseLooper,
  }

/*------ Add data
//gAuth : 995992327252-acb1igj6p76d27095nqbv6gidc3e71i9.apps.googleusercontent.com
//client secret :wyHQedctLxT8Ol8PQquSL9qC
  //id auto generate
  database.collection("users").add({
      firstName : 'Prakash',
      lastName : 'Karena',
      born :'1998'
  }).then(function(docRef){
      console.log('document written with id: ',docRef.id)
  }).then(function(error){
      console.log('error adding document ',error)
  })

  //we define document name 
  database.collection("users").doc("user2").set({
      firstName : 'Nirav',
      lastName : 'Kakadiya',
      born :'1998'
  }).then(function(docRef){
      console.log('document written with id: ',docRef)
  }).then(function(error){
      console.log('error adding document ',error)
  })

  


 -------*/

/*--------------- Read data 
database.collection("users")
         .get().then((querySnapshot) => {
             querySnapshot.forEach((doc) => {
                 console.log(`${doc.id} => ${doc.data().firstName}`);
             })
         })

-----------------*/

/*---------------------- Update data

var userRef = database.collection('users').doc('user1');

// Atomically increment the population of the city by 50.
userRef.update({
    firstName: 'Ronak'
});

-----------------*/

/*---------------------- Delete data 


database.collection("users").doc("user1").delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});

 --------------------------------*/

/*---------------------- Get Single Document 


const docRef = firebasePosts.doc("1");

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log(doc.data().item);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
 --------------------------------*/



/*---------------------- Get Multiple Document 

database.collection("users").where("born", "==", '1998')
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

 --------------------------------*/


/*---------------------- All Documents in collection

    database.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});

//Query

 database.collection("users").where("firstName", "==", "Prakash")
 .onSnapshot(function(querySnapshot) {
     var year = [];
     querySnapshot.forEach(function(doc) {
        year.push(doc.data().born);
     });
     console.log("user born year: ", year.join(","));
 });
 --------------------------------*/

/*---------------------- Looking for realtime database changes 

database.collection("users").doc("user1")
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
    });

------------------------------*/

/*---------------------- Events for local changes


database.collection("users").doc("user1")
    .onSnapshot(function(doc) {
        var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        console.log(source, " data: ", doc.data());
    });
------------------------------*/


/*---------------------- View changes between snapshot

    database.collection("users").where("born", "==", "1998")
    .onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            if (change.type === "added") {
                console.log("New city: ", change.doc.data());
            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.data());
            }
        });
    });

------------------------------*/


/*--------------- query : order limit
citiesRef.where("population", ">", 100000).orderBy("population","desc").limit(2)

citiesRef.orderBy("population").startAt(1000000)

citiesRef.orderBy("population").endAt(1000000)


//query cursor

var citiesRef = db.collection("cities");

return citiesRef.doc("SF").get().then(function(doc) {
    // Get all cities with a population bigger than San Francisco
    var biggerThanSf = citiesRef
        .orderBy("population")
        .startAt(doc);

    // ...
});

//paginate data 

var first = db.collection("cities")
        .orderBy("population")
        .limit(25);

return first.get().then(function (documentSnapshots) {
  // Get the last visible document
  var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
  console.log("last", lastVisible);

  // Construct a new query starting at this document,
  // get the next 25 cities.
  var next = db.collection("cities")
          .orderBy("population")
          .startAfter(lastVisible)
          .limit(25);
});

 ------------*/


 /*------------  configur offline persistence 

 firebase.firestore().enablePersistence()
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
// Subsequent queries will use persistence, if it was enabled successfully


//cache size

// The default cache size threshold is 40 MB. Configure "cacheSizeBytes"
// for a different threshold (minimum 1 MB) or set to "CACHE_SIZE_UNLIMITED"
// to disable clean-up.
firebase.firestore().settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});

firebase.firestore().enablePersistence()
  

//listen to offline database 

db.collection("cities").where("state", "==", "CA")
  .onSnapshot({ includeMetadataChanges: true }, function(snapshot) {
      snapshot.docChanges().forEach(function(change) {
          if (change.type === "added") {
              console.log("New city: ", change.doc.data());
          }

          var source = snapshot.metadata.fromCache ? "local cache" : "server";
          console.log("Data came from " + source);
      });
  });

//Disable and enable network access 

firebase.firestore().disableNetwork()
    .then(function() {
        // Do offline actions
        // ...
    });
test.firestore.js

firebase.firestore().enableNetwork()
    .then(function() {
        // Do online actions
        // ...
    });


------------------*/

/*
  signOut = () => {
        firebase.auth().signOut().then(() => {
            alert('Sign-Out Successfully');
            this.setState({
                redirect : false
            })
          }).catch(function(error) {
            alert('Error While Sign-Out');            
          });

        
    }

    User exist : 



            firebase.auth().onAuthStateChanged((user) =>{
              if(user !== ''){
                    this.setState({
                        redirect : true
                    })
              }
            })
            
*/