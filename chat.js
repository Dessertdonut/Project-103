const firebaseConfig = {
    apiKey: "AIzaSyCQGahgFOSbJJxJJh33B_sb2T2k7C9_GKM",
    authDomain: "classtest-671f0.firebaseapp.com",
    databaseURL: "https://classtest-671f0-default-rtdb.firebaseio.com",
    projectId: "classtest-671f0",
    storageBucket: "classtest-671f0.appspot.com",
    messagingSenderId: "924218901708",
    appId: "1:924218901708:web:f17470a100a7752f4aae69",
    measurementId: "G-HPTBB90GBC"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);




function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}
