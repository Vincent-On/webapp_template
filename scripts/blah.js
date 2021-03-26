function writeCategories() {
    var categoriesRef = db.collection("Restaurant Categories");

    categoriesRef.add({
        code: "FAST",
        name: "Fast Food",
    });

    categoriesRef.add({
        code: "SUSH",
        name: "SUSHI",
    });

    categoriesRef.add({
        code: "PIZZ",
        name: "Pizza",
    });
}


function writeFastFood() {
    var fastRef = db.collection("Fast food Categories");

    fastRef.add({
        code: "MC",
        name: "Mcdonald",
    });

    fastRef.add({
        code: "BK",
        name: "Burgerking",
    });

    fastRef.add({
        code: "PH",
        name: "PizzaHut",
    });
}


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
