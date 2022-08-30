function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("ouput").innerHTMl = 
"";snapshot.forEach(function(childSnapshot) {childKey = 
childSnapshot.key;
Room_names = childKey;
//start code

//end code})
});});}
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
}