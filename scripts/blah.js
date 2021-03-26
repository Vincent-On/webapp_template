
function sayHello(){
    firebase.auth().onAuthStateChanged(function(somebody){
        if(somebody){
            console.log(somebody.uid);
            db.collection("users").doc(somebody.uid)
            .get()
            .then(function(doc){
                console.log(doc.data().name);
                var n = doc.data().name;
                $("#username").text(n);
            })

        }
    })
}
sayHello();

function sayHello() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            // Do something for the user here. 
            console.log(user.uid);
            db.collection("users").doc(user.uid)
                .get()
                .then(function (doc) {
                    var n = doc.data().name;
                    console.log(n);
                    //using jquery
                    $("#username").text(n);
                    //using vanilla javascript
                    //document.getElementById("username").innerText = n;
                })
        } else {
            // No user is signed in.
        }
    });
}
sayHello();
