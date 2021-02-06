//YOUR FIREBASE LINKS

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
    room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("chat").value;
          firebase.database().ref(room_name).push({
                name : user_name,
                message : msg,
                like:0
          });
          document.getElementById("chat").value = "";
    }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
   console.log(firebase_message_id);
   console.log(message_data);
   user_id = message_data['name'];
   like = message_data['like'];
   message = message_data['message'];

   nameid = "<h4>" + user_id + "<img class='user_tick' src='tick.png'>" + "</h4>";
   msg = "<h4 class='message_h4'>" + message + "</h4>";
   like_btn = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" +like+ " onclick='updateLike(this.id)'>";
   span_tag = "<span class='glyphicon glyphicon-thumbs-up'>  Like : " + like + "</span> </button> <hr>";
   row = nameid + msg + like_btn + span_tag;
   document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location.replace("index.html");
}

 function updateLike(message_id){
       console.log("clicked on like and msg button - " + message_id);
       button_id = message_id;
       likes = document.getElementById(button_id).value;
       updatedlike = Number(likes) + 1;
       console.log(updatedlike);

       firebase.database().ref(room_name).child(message_id).update({
             like : updatedlike
       });
 }
 