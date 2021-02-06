
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDc_KUIkUhpxQCdGqP57ozmNsdewpZCyJ4",
      authDomain: "kwitter-cbb57.firebaseapp.com",
      databaseURL: "https://kwitter-cbb57-default-rtdb.firebaseio.com",
      projectId: "kwitter-cbb57",
      storageBucket: "kwitter-cbb57.appspot.com",
      messagingSenderId: "181433365782",
      appId: "1:181433365782:web:71fb9e2be5ba5191400c37"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom(){
           room1 = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room1).update({
                purpose : "Room Name"
          });

          localStorage.setItem("roomname" , room_name);
          window.location = "kwitter_page.html";
    }

    function logout(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("roomname");
          window.location = "index.html";
    }





 function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 console.log("Room Name = " + Room_names);
 row = "<div class='room_name' id=" + Room_names + "onclick='page_redirection(this.id)'> # " + Room_names + "</div> <hr>";
 document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

 function page_redirection(name){
       console.log(name);
       localStorage.setItem("room_name" , name);
       window.location = "kwitter_page.html";
 }

 
