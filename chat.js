// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCFkgooB1mmH9sQ04-PSGw34eUtH_rHiBk",
    authDomain: "chat-room-b34af.firebaseapp.com",
    projectId: "chat-room-b34af",
    storageBucket: "chat-room-b34af.appspot.com",
    messagingSenderId: "529008312134",
    appId: "1:529008312134:web:951eacb40156f7f496af47",
    measurementId: "G-N946Z9GZNT"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
}



